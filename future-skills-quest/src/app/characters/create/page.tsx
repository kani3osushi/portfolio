// src/app/characters/create/page.tsx
"use client";

import CharacterForm from "@/components/CharacterForm";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";

export default function CreateCharacterPage() {
  const router = useRouter();

  const handleSubmit = async (data: { name: string; goal: string }) => {
    const { error } = await supabase.from("characters").insert([data]);
    if (error) {
      alert("キャラクター作成に失敗しました: " + error.message);
    } else {
      alert("キャラクターが作成されました!");
      router.push("/characters");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>キャラクター作成</h1>
      <CharacterForm onSubmit={handleSubmit} />
    </div>
  );
}
