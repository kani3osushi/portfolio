"use client";
import { useState, FormEvent } from "react";

type PredictionResponse = {
  recommended_layout: string;
  message: string;
};

const Home = () => {
  const [duration, setDuration] = useState<number>(0);
  const [action, setAction] = useState<string>("");
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setPrediction(null);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_data: {
            duration: duration,
            action: action,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! status: ${response.status}`
        );
      }

      const data: PredictionResponse = await response.json();
      setPrediction(data);
    } catch (err: any) {
      setError(err.message || "予測に失敗しました");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "2rem" }}>
      <h1>レイアウト推奨システム</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="duration"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            操作時間 (秒):
          </label>
          <input
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
            step="0.1"
            required
            className="text-black"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="action"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            アクション:
          </label>
          <select
            id="action"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            required
            className="text-black"
            style={{ width: "100%", padding: "0.5rem" }}
          >
            <option value="">選択してください</option>
            <option value="click">Click</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          予測する
        </button>
      </form>
      {prediction && (
        <div
          style={{ background: "#eef", padding: "1rem", borderRadius: "8px" }}
        >
          <h2 className="text-black">
            推奨レイアウト: {prediction.recommended_layout}
          </h2>
          <p className="text-black">{prediction.message}</p>
        </div>
      )}
      {error && (
        <div style={{ color: "red", marginTop: "1rem" }}>エラー: {error}</div>
      )}
    </div>
  );
};

export default Home;
