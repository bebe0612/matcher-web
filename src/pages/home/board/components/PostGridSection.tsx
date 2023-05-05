import PostCard from "@/src/pages/home/board/components/PostCard";

export default function PostGridSection() {
  return (
    <>
      <section className="text-white ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </section>
    </>
  );
}
