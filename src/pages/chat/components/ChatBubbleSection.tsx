import ChatBubble from "@/src/pages/chat/components/ChatBubble";
import ChattingField from "@/src/pages/chat/components/ChattingField";
import ChatRoomStore from "@/src/pages/chat/logic/ChatRoomStore";
import useCurrentFriend from "@/src/pages/chat/logic/currentFriendStore";
import { useEffect } from "react";
import StompJs, { Client } from "@stomp/stompjs";

export default function ChatBubbleSection() {
  const { messages, addMessage }: ChatRoomStore = ChatRoomStore();
  const { currentFriendId } = useCurrentFriend();

  useEffect(() => {
    console.log("useEffect");

    const client = new Client({
      brokerURL:
        "ws://ec2-13-125-198-121.ap-northeast-2.compute.amazonaws.com/stomp/chat",
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
    client.onConnect = function (frame) {
      console.log("Connected: " + frame);

      client.subscribe("/sub/chat/room/1", function (message) {
        console.log(message);
      });

      client.publish({
        destination: "/pub/chat/message",
        body:
          "{\n" +
          '    "id":1,\n' +
          '    "roomId":1,\n' +
          '    "userId":1,\n' +
          '    "text":"text"\n' +
          "}",

        headers: { priority: "9" },
      });
    };

    client.onStompError = function (frame) {
      console.log("Broker reported error: " + frame.headers["message"]);
      console.log("Additional details: " + frame.body);
    };

    client.activate();
  });

  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div
        className={`flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 ${
          currentFriendId === -1 ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="grid grid-cols-12 gap-y-2">
            {messages.map((e) => (
              <ChatBubble message={e} key={e.id} />
            ))}
          </div>
        </div>
        <ChattingField />
      </div>

      <div
        className={`flex items-center justify-center h-full ${
          currentFriendId === -1 ? "" : "hidden"
        }`}
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
