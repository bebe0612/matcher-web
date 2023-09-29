import ChatBubble from "@/src/pages/chat/components/ChatBubble";
import ChatRoomStore from "@/src/pages/chat/logic/ChatRoomStore";
import ChattingField from "@/src/pages/chat/components/ChattingField";
import ChatUserList from "@/src/pages/chat/components/ChatUserList";
import useCurrentFriend from "@/src/pages/chat/logic/currentFriendStore";

export default function Room() {
  const { messages, addMessage }: ChatRoomStore = ChatRoomStore();
  const { currentFriendId } = useCurrentFriend();
  console.log(currentFriendId);

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <ChatUserList />

        <div className="flex flex-col flex-auto h-full p-6">
          <div className={`flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 ${currentFriendId === -1 ? "hidden" : ""}`}>
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="grid grid-cols-12 gap-y-2">
                {messages.map((e) => (
                  <ChatBubble message={e} key={e.id} />
                ))}
              </div>
            </div>
            <ChattingField />
          </div>

          <div className={`flex items-center justify-center h-full ${currentFriendId === -1 ? "" : "hidden"}`}>
            <div className="flex flex-col items-center text-gray-300">
              <div className="p-3">
                <svg className="w-20 h-20 fill-none stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>

              <p className="font-light">
                친구를 선택해 채팅을 해보세요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
