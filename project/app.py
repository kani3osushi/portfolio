import os
import logging
import joblib
from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import uvicorn

# ログの設定
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# CORS 設定（Next.js 側のオリジンを許可）
origins = [
    "http://localhost:3000",
    # 必要に応じて本番環境のドメインも追加
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Pydantic モデル定義
class UserData(BaseModel):
    duration: float = Field(..., example=1.2)
    action: str = Field(..., example="click")

class PredictionRequest(BaseModel):
    user_data: UserData

class PredictionResponse(BaseModel):
    recommended_layout: str
    message: str

# モデルファイルのロード
model_path = "layout_model.pkl"
if os.path.exists(model_path):
    try:
        model = joblib.load(model_path)
        logger.info("AI モデルをロードしました。")
    except Exception as e:
        logger.error("モデルのロードに失敗しました: %s", e)
        model = None
else:
    logger.warning("モデルファイルが存在しません。ダミー予測を使用します。")
    model = None

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    logger.info("予測リクエストを受信: %s", request.user_data.dict())
    try:
        # リクエストから必要な値を取得
        duration = request.user_data.duration
        action = request.user_data.action
        action_flag = 1 if action.lower() == "click" else 0

        features = [duration, action_flag]
        logger.info("入力特徴量: %s", features)

        # モデルがロードされている場合は予測、ない場合はダミー予測
        if model is not None:
            prediction = model.predict([features])
            recommended_layout = prediction[0]
        else:
            # ダミー予測ロジック：duration が 2 未満なら layoutA、それ以外なら layoutB
            recommended_layout = "layoutA" if duration < 2 else "layoutB"

    except Exception as e:
        logger.error("予測エラー: %s", e)
        raise HTTPException(status_code=500, detail="予測処理に失敗しました。")

    response = PredictionResponse(
        recommended_layout=recommended_layout,
        message=f"あなたにおすすめのレイアウトは {recommended_layout} です。"
    )
    logger.info("予測結果: %s", response.dict())
    return response

# WebSocket エンドポイント（任意：リアルタイム通知の例）
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    logger.info("WebSocket 接続を確立")
    try:
        while True:
            data = await websocket.receive_text()
            logger.info("WebSocket 受信: %s", data)
            # ここではダミーの応答を返す例
            response_data = {
                "recommended_layout": "layoutB",
                "message": "リアルタイム更新：おすすめは layoutB です。"
            }
            await websocket.send_json(response_data)
            logger.info("WebSocket 送信: %s", response_data)
    except WebSocketDisconnect:
        logger.info("WebSocket 接続が切断されました")
    except Exception as e:
        logger.error("WebSocket エラー: %s", e)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
