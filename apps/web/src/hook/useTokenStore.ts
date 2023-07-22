import { create } from 'zustand';

type Store = {
  selectedToken?: any;
  setToken: (token: any) => void;
};

export const useTokenStore = create<Store>((set) => ({
  setToken: (token) => set({ selectedToken: token }),
}));
