// types.ts

export type User = {
  id: string;
  name: string;
  goal: string;
  created_at: string;
};

export type Event = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

export type Skill = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

export type UserSkill = {
  id: number;
  user_id: string;
  skill_id: number;
  acquired_at: string;
};

export type Choice = {
  id: number;
  event_id: number;
  option: string;
  skill_id: number;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      users: {
        Row: User; // 取得時の型
        Insert: Omit<User, "id" | "created_at">; // 新規作成時の型
        Update: Partial<Omit<User, "id">>; // 更新時の型
      };
      events: {
        Row: Event;
        Insert: Omit<Event, "id" | "created_at">;
        Update: Partial<Omit<Event, "id">>;
      };
      skills: {
        Row: Skill;
        Insert: Omit<Skill, "id" | "created_at">;
        Update: Partial<Omit<Skill, "id">>;
      };
      user_skills: {
        Row: UserSkill;
        Insert: Omit<UserSkill, "id" | "acquired_at">;
        Update: Partial<Omit<UserSkill, "id">>;
      };
      choices: {
        Row: Choice;
        Insert: Omit<Choice, "id" | "created_at">;
        Update: Partial<Omit<Choice, "id">>;
      };
    };
  };
};
