import { create } from "zustand";
import { MessageDto } from "@/src/types/message-dto";

interface ChatRoomStore {
  messages: MessageDto[];
  addMessage: (message: MessageDto) => void;
  setMessage: (msgList: MessageDto[]) => void;
}

const ChatRoomStore = create<ChatRoomStore>((set) => ({
  messages: [
    {
      id: 1,
      me: false,
      user: {
        createdDt:[],
        schoolName: '',
        yearOfAdmission: 0,
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
        createdDt:[],
        schoolName: '',
        yearOfAdmission: 0,
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
        createdDt:[],
        schoolName: '',
        yearOfAdmission: 0,
        id: 1,
        email: "ㅁㄴㅇ",
        nickname: "이윤지",
      },
      body: "잘부탁드립니다 :)",
    },
  ],
  addMessage: (message: MessageDto) => set((state) => ({ messages: [...state.messages, message] })),
  setMessage: (msgList: MessageDto[]) => set({ messages:msgList }),
}));

export default ChatRoomStore;
