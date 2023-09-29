import { create } from "zustand"

interface ICurrentFriend {
  currentFriendId: number;
  setCurrentFriend: (id: number) => void;
}

const useCurrentFriend = create<ICurrentFriend>(set => ({
  currentFriendId: -1,
  setCurrentFriend: (newId: number) => set({ currentFriendId: newId }),
}));

export default useCurrentFriend;