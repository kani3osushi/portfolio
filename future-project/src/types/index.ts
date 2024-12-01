export type Skill = {
  id: string;
  name: string;
  description: string;
};

export type Choice = {
  id: string;
  text: string;
  nextId?: string; // 次の選択肢ID
  acquiredSkill?: Skill; // 得られるスキル
};

export type StoryNode = {
  id: string;
  year: number;
  age: number;
  description: string;
  choices: Choice[];
};
