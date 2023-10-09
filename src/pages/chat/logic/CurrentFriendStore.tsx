import { FriendDto } from "@/src/types/friend-dto";
import { create } from "zustand"

interface ICurrentFriend {
  currentFriend: FriendDto;
  setCurrentFriend: (friend: FriendDto) => void;
  removeCurrentFriend: () => void;
}

const nullFriend: FriendDto = {
  id: -1,
  email: '',
  nickname: '',
  roomId: -1,
}

const useCurrentFriend = create<ICurrentFriend>(set => ({
  currentFriend: nullFriend,
  setCurrentFriend: (newFriend: FriendDto) => set({ currentFriend: newFriend }),
  removeCurrentFriend: () => set({ currentFriend: nullFriend }),
}));

export default useCurrentFriend;
