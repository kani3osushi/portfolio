// src/components/SkillCard.tsx
import React from "react";
import { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const rarityColor =
    skill.rarity === "legendary"
      ? "text-yellow-500"
      : skill.rarity === "rare"
      ? "text-blue-500"
      : "text-gray-500";

  return (
    <div className="rounded-md border border-gray-300 p-4 shadow-sm">
      <h2 className={`text-lg font-semibold ${rarityColor}`}>{skill.name}</h2>
      <p className="text-sm text-gray-600">{skill.description}</p>
      <p className="mt-2 text-xs text-gray-400">
        レアリティ: <span className={rarityColor}>{skill.rarity}</span>
      </p>
    </div>
  );
};

export default SkillCard;
