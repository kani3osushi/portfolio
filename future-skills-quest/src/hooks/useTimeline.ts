// src/hooks/useTimeline.ts
import { useQuery } from "@tanstack/react-query";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database, Event } from "@/types";

const supabase = createClientComponentClient<Database>();

const fetchTimeline = async (): Promise<Event[]> => {
  const { data, error } = await supabase.from("events").select("*");
  if (error) throw new Error(error.message);

  // データが null の場合にエラーをスロー
  if (!data) throw new Error("No data found");

  // データを純粋なオブジェクトとして返す
  return data.map((event) => ({
    id: event.id,
    title: event.title,
    description: event.description,
    created_at: event.created_at,
  }));
};

export const useTimeline = () => {
  return useQuery<Event[], Error>({
    queryKey: ["timeline"],
    queryFn: fetchTimeline,
  });
};
