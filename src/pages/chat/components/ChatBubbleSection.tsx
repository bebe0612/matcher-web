import ChatBubble from "@/src/pages/chat/components/ChatBubble";
import ChattingField from "@/src/pages/chat/components/ChattingField";
import ChatRoomStore from "@/src/pages/chat/logic/ChatRoomStore";
import useCurrentFriend from "@/src/pages/chat/logic/currentFriendStore";
import useMyProfile from "@/src/components/MyProfileStore";
import { useEffect } from "react";
import { Client } from "@stomp/stompjs";
import axios from "axios";

export default function ChatBubbleSection() {
  const { currentFriend } = useCurrentFriend();
  const { messages, addMessage, setMessage }: ChatRoomStore = ChatRoomStore();
  const { myProfile } = useMyProfile();
  let client = new Client({
    brokerURL: "ws://ec2-13-125-198-121.ap-northeast-2.compute.amazonaws.com/stomp/chat",
    //debug: (str) => console.log(str),
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });
  client.activate();

  useEffect(() => {
    axios.get('/v1/chats?roomId=' + currentFriend.roomId)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
    setMessage([]);
    client.onConnect = () => {
      client.subscribe("/sub/chat/room/" + currentFriend.roomId, (data: any) => {
        const msg = JSON.parse(new TextDecoder().decode(data._binaryBody));
        addMessage({
          id: Math.floor(Math.random() * 10000),
          me: msg.userId === myProfile.id,
          user: (msg.userId === myProfile.id ? myProfile.nickname : currentFriend.nickname),
          body: msg.text,
        });
      });
    };
  }, [currentFriend.roomId]);

  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div
        className={`flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 ${currentFriend.id === -1 ? "hidden" : ""
          }`}
      >
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="grid grid-cols-12 gap-y-2">
            {messages.map((e) => (
              <ChatBubble message={e} key={e.id} />
            ))}
          </div>
        </div>
        <ChattingField client={client} />
      </div>

      <div
        className={`flex items-center justify-center h-full ${currentFriend.id === -1 ? "" : "hidden"}`}
      >
        <div className="flex flex-col items-center text-gray-300">
          <div className="p-3">
            <svg
              className="w-20 h-20 fill-none stroke-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>

          <p className="font-light">친구를 선택해 채팅을 해보세요!</p>
        </div>
      </div>
    </div>
  );
}
