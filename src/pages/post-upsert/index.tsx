import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("../../components/editor/CKeditor"), {
  ssr: false,
});

export default function PostUpsertPage() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const postSumbit = () => {
    //API
    console.log({ title, content });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          className="border"
        />

        <div id="editor" className="mb-5">
          <Editor
            onChange={(data: any) => {
              setContent(data);
            }}
            name={undefined}
            value="글을 입력해주세요."
          />
        </div>

        <button
          onClick={postSumbit}
          className="border"
        >
          제출
        </button>
      </div>
    </div>
  );
}
