// app/store/useGameStore.ts （Zustand例）
import { create } from 'zustand';

interface GameState {
  currentYear: number;
  skills: number[];
  setYear: (year: number) => void;
  addSkill: (skillId: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentYear: 1,
  skills: [],
  setYear: (year) => set({ currentYear: year }),
  addSkill: (skillId) => set((state) => ({ skills: [...state.skills, skillId] }))
}));
