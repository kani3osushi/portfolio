// src/app/timeline/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import TimelineEvent from "@/components/TimelineEvent";
import { CharacterSkill } from "@/types";

export default function TimelinePage() {
  const [events, setEvents] = useState<CharacterSkill[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("character_skills").select(`
        id,
        acquired_at,
        skills(name, description, rarity),
        characters(name)
      `);

      if (error) {
        console.error(error);
      } else if (data) {
        // データを整形して型に一致させる
        const formattedData = data.map((item: any) => ({
          id: item.id,
          acquired_at: item.acquired_at,
          skill: item.skills[0], // skills は配列で返ってくる可能性があるため
          character: item.characters[0], // characters も配列
        })) as CharacterSkill[];

        setEvents(formattedData);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>タイムライン</h1>
      {events.map((event) => (
        <TimelineEvent key={event.id} event={event} />
      ))}
    </div>
  );
}
