import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";

const Editor = dynamic(() => import("../../components/editor/CKeditor"), {
  ssr: false,
});

export default function PostUpsertPage() {
  const router = useRouter();
  const [title_, setTitle] = useState<string>('');
  const [content_, setContent] = useState<string>('');
  const onSumbit = () => {
    console.log({ title_, content_ });
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
          onClick={onSumbit}
          className="border"
        >
          제출
        </button>
      </div>
    </div>
  );
}
