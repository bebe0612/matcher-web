import PostCard from "@/src/pages/board/components/PostCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PostGridSection() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios.get("/v1/board")
      .then((res) => {
        setPostList(res.data.articles.content);
      })
      .catch((error) => {
        console.log(error);
      })
  },[]);

  return (
    <>
      <section className="text-white ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {postList?.map((post: any) => (
              <PostCard
                id={post.id}
                title={post.title}
                content={post.content}
                nickname={post.nickname}
                createdDt={post.createdDt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

