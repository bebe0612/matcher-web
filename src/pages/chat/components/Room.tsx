import ChatBubble from "@/src/pages/chat/components/ChatBubble";
import ChatRoomStore from "@/src/pages/chat/logic/ChatRoomStore";
import ChattingField from "@/src/pages/chat/components/ChattingField";
import ChatUserList from "@/src/pages/chat/components/ChatUserList";

export default function Room() {
  const { messages, addMessage }: ChatRoomStore = ChatRoomStore();

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <ChatUserList />
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {messages.map((e) => (
                    <ChatBubble message={e} key={e.id} />
                  ))}
                </div>
              </div>
            </div>
            <ChattingField />
          </div>
        </div>
      </div>
    </div>
  );
}
