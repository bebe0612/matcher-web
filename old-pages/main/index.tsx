import { useState } from "react";
import NavBar from "../navbar";
import PageHead from "../../pages/components/pagehead";

export default function Main() {
  const [schoolInfo, setSchoolInfo] = useState({ name: "광운중학교", year: 2020 });
  const [togglePost, setTogglePost] = useState(false);

  return (
    <div className="bg-gradient-to-r from-orange-200 to-yellow-200 h-screen">
      <PageHead title={schoolInfo.name} />
      <NavBar school={schoolInfo.name} year={schoolInfo.year} />
      <div className="mt-5 flex gap-5 max-w-5xl mx-auto">
        <div className="basis-1/4">
          <div className="bg-white rounded-xl p-3 mb-5 shadow-xl">
            <span>현재 동창들</span>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-xl">
            <span>참가 중인 대화방</span>
          </div>
        </div>

        <div className="bg-white rounded-xl basis-1/2 p-3 shadow-xl flex flex-col justify-between divide-y divide-gray-200">
          <span>학교 게시판</span>
          <div>
            <button type="button" onClick={() => setTogglePost(true)} className={`${togglePost ? "hidden" : ""} Button-white ml-auto`}>글쓰기</button>
            <div className={`${togglePost ? "" : "hidden"} flex flex-col text-gray-800`}>
              <input type="text" placeholder="제목" className="bg-gray-100"/>
              <textarea placeholder="내용" className="bg-gray-100" />
              <div>
                <button type="button" onClick={() => setTogglePost(false)} className="Button-white">취소</button>
                <button type="button" className="Button-colored">글 작성</button>
              </div>
            </div>
          </div>
          <div className="">
            게시물
          </div>
        </div>

        <div className="bg-white rounded-xl basis-1/2 p-3 shadow-xl">
          <span>학교 오픈 채팅</span>
        </div>
      </div>
    </div>
  );
}