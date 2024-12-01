"use client";

import { useQuery } from "@tanstack/react-query";
import { Database } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Choice } from "@/types";

const supabase = createClientComponentClient<Database>();

// データを取得する関数
const fetchChoices = async (eventId: number): Promise<Choice[]> => {
  const { data, error } = await supabase
    .from("choices")
    .select("*")
    .eq("event_id", eventId);

  if (error) throw new Error(error.message);
  if (!data) throw new Error("No data found");

  return data.map((choice) => ({
    id: choice.id,
    event_id: choice.event_id,
    option: choice.option,
    skill_id: choice.skill_id,
    created_at: choice.created_at,
  }));
};

// React Query フック
export const useChoices = (eventId: number) => {
  return useQuery<Choice[], Error>({
    queryKey: ["choices", eventId], // queryKey に eventId を含める
    queryFn: () => fetchChoices(eventId), // eventId を渡す
    enabled: !!eventId, // eventId が渡されたときだけクエリを実行
  });
};
