import { create } from "zustand";
import type { User } from "@/types/user";

type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useUser = create<UserStore>((set) => ({
  user: null,

  setUser: (user: User | null) => set({ user }),
}));
