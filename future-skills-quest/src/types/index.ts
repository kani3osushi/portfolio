export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      choice_groups: {
        Row: {
          id: number;
          year: number;
        };
        Insert: {
          id?: number;
          year: number;
        };
        Update: {
          id?: number;
          year?: number;
        };
      };
      choices: {
        Row: {
          id: number;
          choice_group_id: number;
          text: string;
          skill_id: number | null;
          next_choice_group_id: number | null;
        };
        Insert: {
          id?: number;
          choice_group_id: number;
          text: string;
          skill_id?: number | null;
          next_choice_group_id?: number | null;
        };
        Update: {
          id?: number;
          choice_group_id?: number;
          text?: string;
          skill_id?: number | null;
          next_choice_group_id?: number | null;
        };
      };
      endings: {
        Row: {
          id: number;
          name: string;
          description: string | null;
          required_skill_ids: number[] | null;
        };
        Insert: {
          id?: number;
          name: string;
          description?: string | null;
          required_skill_ids?: number[] | null;
        };
        Update: {
          id?: number;
          name?: string;
          description?: string | null;
          required_skill_ids?: number[] | null;
        };
      };
      skills: {
        Row: {
          id: number;
          name: string;
          rarity: string | null;
          description: string | null;
        };
        Insert: {
          id?: number;
          name: string;
          rarity?: string | null;
          description?: string | null;
        };
        Update: {
          id?: number;
          name?: string;
          rarity?: string | null;
          description?: string | null;
        };
      };
      user_choices: {
        Row: {
          id: number;
          user_id: string;
          choice_id: number;
        };
        Insert: {
          id?: number;
          user_id: string;
          choice_id: number;
        };
        Update: {
          id?: number;
          user_id?: string;
          choice_id?: number;
        };
      };
      user_skills: {
        Row: {
          id: number;
          user_id: string;
          skill_id: number;
        };
        Insert: {
          id?: number;
          user_id: string;
          skill_id: number;
        };
        Update: {
          id?: number;
          user_id?: string;
          skill_id?: number;
        };
      };
    };
  };
}
