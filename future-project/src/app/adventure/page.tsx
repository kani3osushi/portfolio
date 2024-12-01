"use client";

import { useRouter } from "next/navigation";

export default function AdventureIntroPage() {
  const router = useRouter();

  const startAdventure = () => {
    router.push("/adventure/start"); // 最初の選択肢へ遷移
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>冒険の始まり</h1>
      <p>
        ようこそ！ここからあなたの冒険が始まります。
        <br />
        選択肢を選んで、未来を切り開いてください。
      </p>
      <button
        onClick={startAdventure}
        style={{
          fontSize: "20px",
          padding: "10px 20px",
          marginTop: "20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        冒険を始める
      </button>
    </div>
  );
}
