import { create } from "zustand";

type Store = {
  latest: string;
  updateLatest: (latest: string) => void;
  resetLatest: () => void;
};

export const useStore = create<Store>((set) => ({
  latest: "",
  updateLatest: (latest: string) => set({ latest }),
  resetLatest: () => set({ latest: "" }),
}));
