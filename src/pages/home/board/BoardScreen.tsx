import Header from "@/src/pages/home/components/Header";
import PostGridSection from "@/src/pages/home/board/components/PostGridSection";
import Link from "next/link";

export default function BoardScreen() {
  return (
    <>
      <div className="flex justify-between items-center pr-8">
        <Header title={"게시판"} description={"아무 글이나 적어봐요! 💬"} />
        <Link
          href={"/home/board/write"}
          className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          글쓰기
        </Link>
      </div>
      <PostGridSection />
    </>
  );
}
