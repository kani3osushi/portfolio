// import { supabase } from "@/utils/supabaseClient";
// import { useQuery } from "react-query";

// export const useSkills = () => {
//   return useQuery("skills", async () => {
//     const { data, error } = await supabase.from("skills").select("*");
//     if (error) throw error;
//     return data;
//   });
// };


"use client";

import { useQuery } from "@tanstack/react-query";
import { Database, Skill } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient<Database>();

const fetchSkills = async (): Promise<Skill[]> => {
  const { data, error } = await supabase.from("skills").select("*");
  if (error) throw new Error(error.message);
  // データが null の場合にエラーをスロー
  if (!data) throw new Error("No data found");

  // データを純粋なオブジェクトとして返す
  return data.map((skill) => ({
    id: skill.id,
    title: skill.title,
    description: skill.description,
    created_at: skill.created_at,
  }));
};

export const useSkills = () => {
  return useQuery<Skill[], Error>({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });
};
