import { MessageDto } from "@/src/types/message-dto";

export default function ChatBubble({ message }: { message: MessageDto }) {
  if (message.me) {
    return (
      <div className="animate-flip-down animate-once animate-duration-300 col-start-6 col-end-13 p-3 rounded-lg">
        <div className="flex items-center justify-start flex-row-reverse">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-800 flex-shrink-0 text-white">
            {message.user.slice(0, 1)}
          </div>
          <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
            {message.body}
          </div>
          <div className="text-gray-500 text-xs px-3">
            {message.date.toLocaleTimeString()}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="animate-flip-down animate-once animate-duration-300 col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 text-white">
          {message.user.slice(0, 1)}
        </div>
        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          {message.body}
        </div>
        <div className="text-gray-500 text-xs px-3">
          {message.date.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
