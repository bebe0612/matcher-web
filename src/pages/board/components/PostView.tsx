import axios from "axios";
import { useState, useEffect } from "react";
import parse from "html-react-parser"
import { useRouter } from "next/router";

export default function PostView({ id }: { id: string }) {
  const router = useRouter();
  const [post, setPost] = useState<any>();
  useEffect(() => {
    axios.get(`/v1/board/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        if (error?.response?.status === 404) {
          alert("404 오류. 리소스를 찾을 수 없습니다.");
          router.push('/board');
        }
      })
  }, [id]);

  const postDelete = () => {
    axios.delete(`/v1/board/${id}`)
      .then((res) => {
        alert("게시물 삭제 완료.");
        router.push('/board');
      })
      .catch((error) => {
        alert("서버와의 오류로 인해 게시물을 삭제하지 못했습니다.")
      })
  };

  return (
    <div className="px-10">
      <div className="flex items-center gap-2">
        <img
          alt="Man"
          src="/defaultprofile.svg"
          className="w-12 rounded-full object-cover"
        />

        <div>
          <p className="text-xl font-bold text-gray-800">
            {post?.nickname}
          </p>
          <p className="text-xs text-gray-800">
            {post?.createdDt[0]}/{post?.createdDt[1]}/{post?.createdDt[2]} {post?.createdDt[3]}:{post?.createdDt[4]}
          </p>
        </div>
      </div>

      <p className="mt-4 text-3xl font-bold text-black">
        {post?.title}
      </p>

      <p className="mt-4">
        {parse(`${post?.content}`)}
      </p>

      <button
        onClick={postDelete}
        className="mt-5 bg-red-400 text-white font-semibold p-2 text-sm shadow-sm rounded-lg duration-200 hover:bg-red-500  focus:bg-red-600 focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50">
        삭제
      </button>
    </div>
  );
}
