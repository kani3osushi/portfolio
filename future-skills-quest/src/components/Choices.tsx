"use client"; // クライアントコンポーネントとして実装することでボタン操作を可能に
import { useState } from "react";

type Choice = {
  id: number;
  year: number;
  text: string;
  skill: string;
};

export default function Choices({
  userId,
  year,
  choices,
}: {
  userId: string;
  year: number;
  choices: Choice[];
}) {
  const [loading, setLoading] = useState(false);

  const handleSelect = async (choiceId: number) => {
    setLoading(true);
    const res = await fetch("/api/select", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, year, choiceId }),
    });
    setLoading(false);
    if (res.ok) {
      // 再読み込みして次の年へ
      window.location.reload();
    }
  };

  return (
    <div>
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => handleSelect(choice.id)}
          disabled={loading}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}
