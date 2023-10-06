import ChatUserList from "@/src/pages/chat/components/ChatUserList";
import useCurrentFriend from "@/src/pages/chat/logic/currentFriendStore";
import ChatBubbleSection from "@/src/pages/chat/components/ChatBubbleSection";

export default function Room() {
  const { currentFriend } = useCurrentFriend();
  console.log("현재 방 ID: " + currentFriend.roomId);

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <ChatUserList />
        <ChatBubbleSection />
      </div>
    </div>
  );
}
