import ChatBubble from "@/src/pages/chat/components/ChatBubble";
import ChatRoomStore from "@/src/pages/chat/logic/ChatRoomStore";
import ChattingField from "@/src/pages/chat/components/ChattingField";
import ChatUserList from "@/src/pages/chat/components/ChatUserList";
import useCurrentFriend from "@/src/pages/chat/logic/currentFriendStore";
import ChatBubbleSection from "@/src/pages/chat/components/ChatBubbleSection";

export default function Room() {
  const { messages, addMessage }: ChatRoomStore = ChatRoomStore();
  const { currentFriendId } = useCurrentFriend();
  console.log(currentFriendId);

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <ChatUserList />
        <ChatBubbleSection />
      </div>
    </div>
  );
}
