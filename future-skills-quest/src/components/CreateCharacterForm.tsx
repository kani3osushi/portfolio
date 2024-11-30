// src/components/CreateCharacterForm.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";

export default function CreateCharacterForm() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("characters").insert({ name, goal });

    if (error) {
      console.error("Error creating character:", error.message);
    } else {
      alert("キャラクターが作成されました！");
    }

    setName("");
    setGoal("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input
        type="text"
        placeholder="キャラクター名"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="目標"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        required
      />
      <button type="submit">作成</button>
    </form>
  );
}
