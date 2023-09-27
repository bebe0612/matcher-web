import { UserDto } from "@/src/types/user-dto";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ChatUserList() {
  const [friendList, setFriendList] = useState<UserDto[]>([]);
  useEffect(() => {
    axios.get('/v1/friends')
      .then((res) => {
        console.log(res);
        setFriendList(res.data);
      })
      .catch((error) => {
        alert('/친구 목록을 불러오지 못했습니다.');
      });
  }, []);

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
          </svg>
        </div>
        <div className="ml-2 font-bold text-2xl">실시간 채팅</div>
      </div>

      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold">활동중인 친구들</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            {friendList.length}
          </span>
        </div>

        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          {friendList.map((friend: any) =>
            <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
              <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                {friend[0]}
              </div>
              <div className="ml-2 text-sm font-semibold">{friend}</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
