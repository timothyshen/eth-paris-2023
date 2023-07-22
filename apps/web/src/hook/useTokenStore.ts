import { create } from 'zustand';

export const useTokenStore = create((set) => ({
  setTokens: (tokens: any) => set((state) => ({ tokens })),
}));
