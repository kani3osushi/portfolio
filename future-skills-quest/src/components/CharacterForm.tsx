// src/components/CharacterForm.tsx
"use client";

import { useState } from "react";

interface CharacterFormProps {
  onSubmit: (data: { name: string; goal: string }) => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, goal });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          名前
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="goal" className="block text-sm font-medium">
          目標
        </label>
        <input
          id="goal"
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 py-2 px-4 text-white hover:bg-blue-700 focus:outline-none"
      >
        作成
      </button>
    </form>
  );
};

export default CharacterForm;
