// src/app/characters/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import CreateCharacterForm from "@/components/CreateCharacterForm";
import { Character } from "@/types";
import Link from "next/link";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const { data, error } = await supabase.from("characters").select("*");

      if (error) {
        console.error("Error fetching characters:", error.message);
      } else if (data) {
        setCharacters(data as Character[]);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>キャラクター一覧</h1>
      {/* <CreateCharacterForm /> */}
      <Link href="./characters/create">作成する</Link>

      <div style={{ marginTop: "2rem" }}>
        {characters.length === 0 ? (
          <p>
            まだキャラクターがいません。新しいキャラクターを作成してください！
          </p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {characters.map((character) => (
              <li
                key={character.id}
                style={{
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              >
                <h2 style={{ margin: 0 }}>{character.name}</h2>
                <p style={{ margin: "0.5rem 0", color: "#555" }}>
                  目標: {character.goal}
                </p>
                <small style={{ color: "#999" }}>
                  作成日: {new Date(character.created_at).toLocaleDateString()}
                </small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
