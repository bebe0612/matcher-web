import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";

const Editor = dynamic(() => import("@/src/components/editor/CKeditor"), {
  ssr: false,
});

export default function PostUpsertPage() {
  const router = useRouter();
  const [title_, setTitle] = useState<string>('');
  const [content_, setContent] = useState<string>('');
  const onSumbit = () => {
    console.log({ title_, content_ });
    if (title_ && content_) {
      axios.post("/v1/board", {
        content: content_,
        title: title_,
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      }).then((res) => {
        alert("글이 작성되었습니다.");
        router.push("/board");
      }).catch((error) => {
        console.log(error);
      });
    }
    else alert("제목과 내용을 입력해 주세요.");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="글 제목"
          className="w-full h-10 border border-gray-300 bg-white text-lg px-2 text-gray-700 font-bold shadow-sm"
        />

        <div id="editor">
          <Editor
            onChange={(data: any) => {
              setContent(data);
            }}
            name={undefined}
            value="글을 입력해주세요."
          />
        </div>

        <button
          onClick={onSumbit}
          className="mt-5 bg-red-400 text-white font-semibold px-5 py-2 text-lg shadow-sm rounded-lg duration-200 hover:bg-red-500  focus:bg-red-600 focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
        >
          제출
        </button>
      </div>
    </div>
  );
}
