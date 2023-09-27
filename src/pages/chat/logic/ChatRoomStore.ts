import { create } from "zustand";
import { MessageDto } from "@/src/types/message-dto";

interface ChatRoomStore {
  messages: MessageDto[];
  addMessage: (message: MessageDto) => void;
}

const ChatRoomStore = create<ChatRoomStore>((set) => ({
  messages: [
    {
      id: 1,
      me: false,
      user: {
        id: 1,
        email: "ㅁㄴㅇ",
        nickname: "이윤지",
      },
      body: "안녕하세요",
    },
    {
      id: 2,
      me: true,
      user: {
        id: 1,
        email: "ㅁㄴㅇ",
        nickname: "이윤지",
      },
      body: "안녕하세요",
    },
    {
      id: 3,
      me: false,
      user: {
        id: 1,
        email: "ㅁㄴㅇ",
        nickname: "이윤지",
      },
      body: "잘부탁드립니다 :)",
    },
  ],
  addMessage: (message: MessageDto) => set((state) => ({ messages: [...state.messages, message] })),
}));

export default ChatRoomStore;
