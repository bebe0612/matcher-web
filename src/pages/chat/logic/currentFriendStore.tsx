import { FriendDto } from "@/src/types/friend-dto";
import { create } from "zustand"

interface ICurrentFriend {
  currentFriend: FriendDto;
  setCurrentFriend: (friend: FriendDto) => void;
}

const useCurrentFriend = create<ICurrentFriend>(set => ({
  currentFriend: {
    id: -1,
    email: '',
    nickname: '',
    roomId: -1,
  },
  setCurrentFriend: (newFriend: FriendDto) => set({ currentFriend: newFriend }),
}));

export default useCurrentFriend;