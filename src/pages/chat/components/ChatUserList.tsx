import axios from "axios";
import { useEffect, useState } from "react";

export default function ChatUserList() {
  const [friendList, setFriendList] = useState(["이윤지", "장승호", "홍승기"]);
  useEffect(() => {
    axios.get('') // 현재 자신의 친구의 정보 목록 조회 API
      .then((res) => {
        //setFriendList([]);
      })
      .catch((error) => {

      });
  }, []);

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div className="ml-2 font-bold text-2xl">실시간 채팅</div>
      </div>

      <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
        <div className="h-20 w-20 rounded-full border overflow-hidden">
          <img
            src="https://avatars3.githubusercontent.com/u/2763884?s=128"
            alt="Avatar"
            className="h-full w-full"
          />
        </div>
        <div className="text-sm font-semibold mt-2">이상원</div>

        <div className="flex flex-row items-center mt-3">
          <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
            <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
          </div>
          <div className="leading-none ml-1 text-xs">활성</div>
        </div>
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

              {/* <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                2
              </div>
              # 확인하지 않은 메시지 수
              */}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
