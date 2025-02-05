import numpy as np
from sklearn.linear_model import LogisticRegression
import joblib

# サンプル特徴量：各サンプルは [duration, action_flag] で表現
# ※duration: 操作時間（秒）、action_flag: クリックなら 1、その他なら 0
X = np.array([
    [1.0, 1],
    [2.0, 0],
    [1.5, 1],
    [2.5, 0],
    [0.8, 1],
    [3.0, 0],
])
y = np.array(["layoutA", "layoutB", "layoutA", "layoutB", "layoutA", "layoutB"])

model = LogisticRegression()
model.fit(X, y)

joblib.dump(model, "layout_model.pkl")
print("モデルを layout_model.pkl に保存しました。")
