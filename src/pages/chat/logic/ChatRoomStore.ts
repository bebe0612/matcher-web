import { create } from "zustand";
import { MessageDto } from "@/src/types/message-dto";

interface ChatRoomStore {
  messages: MessageDto[];
  addMessage: (message: MessageDto) => void;
  setMessage: (msgList: MessageDto[]) => void;
}

const ChatRoomStore = create<ChatRoomStore>((set) => ({
  messages: [],
  addMessage: (message: MessageDto) => set((state) => ({ messages: [...state.messages, message] })),
  setMessage: (msgList: MessageDto[]) => set({ messages:msgList }),
}));

export default ChatRoomStore;
