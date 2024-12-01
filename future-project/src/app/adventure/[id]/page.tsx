"use client";

import { storyNodes } from "@/data/choices";
import { useRouter } from "next/navigation";

export default function StoryPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const currentNode = storyNodes.find((node) => node.id === params.id);

  if (!currentNode) {
    return <p>データが見つかりません。</p>;
  }

  const handleChoice = (nextId?: string) => {
    if (nextId) {
      router.push(`/adventure/${nextId}`);
    } else {
      router.push("/adventure/end");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{currentNode.age}歳</h1>
      <p>{currentNode.description}</p>
      {currentNode.choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => handleChoice(choice.nextId)}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px 20px",
            fontSize: "18px",
          }}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}
