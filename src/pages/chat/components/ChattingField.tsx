import ChatRoomStore from "@/src/pages/chat/logic/ChatRoomStore";
import { useState } from "react";

export default function ChattingField() {
  const { messages, addMessage }: ChatRoomStore = ChatRoomStore();

  // message state using usestate

  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
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
          onClick={() => {
            addMessage({
              id: messages.length + 1,
              body: message,
              me: true,
              user: {
                createdDt: [],
                schoolName: "",
                yearOfAdmission: 0,
                id: 1,
                nickname: "이상원",
                email: "asd",
              },
            });

            setMessage("");
          }}
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
