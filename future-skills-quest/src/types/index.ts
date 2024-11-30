export interface Character {
  id: string;
  name: string;
  goal: string;
  created_at: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  rarity: "common" | "rare" | "legendary";
  created_at: string;
}

export interface CharacterSkill {
  id: string;
  acquired_at: string;
  skill: {
    name: string;
    description: string;
    rarity: string;
  };
  character: {
    name: string;
  };
}

