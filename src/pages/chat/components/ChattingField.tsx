import { useState } from "react";
import useMyProfile from "@/src/components/MyProfileStore";
import useCurrentFriend from "@/src/pages/chat/logic/CurrentFriendStore";
import ChatRoomStore from "@/src/pages/chat/logic/ChatRoomStore";
import { Client } from "@stomp/stompjs";

export default function ChattingField({ client }: { client: Client }) {
  const [message, setMessage] = useState("");
  const { myProfile } = useMyProfile();
  const { currentFriend } = useCurrentFriend();
  const { addMessage }: ChatRoomStore = ChatRoomStore();

  const onClick = () => {
    if (message !== '' && currentFriend.roomId !== -1) {
      client.publish({
        destination: "/pub/chat/message",
        body: JSON.stringify({
          roomId: currentFriend.roomId,
          userId: myProfile.id,
          text: message,
        }),
      });
      addMessage({
        id: Math.floor(Math.random() * 10000),
        me: true,
        user: myProfile.nickname,
        body: message,
      });
      setMessage("");
    }
  };

  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
            <svg
              className="w-6 h-6 fill-none stroke-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="ml-4">
        <button
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
          onClick={() => onClick()}
        >
          <span>전송</span>
          <span className="ml-2">
            <svg
              className="w-4 h-4 transform rotate-45 -mt-px fill-none stroke-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
