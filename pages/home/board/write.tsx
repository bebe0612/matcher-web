import PostUpsertPage from "@/src/pages/post-upsert";
import PageHead from "@/src/components/pagehead";

export default function Index() {
  return (
    <>
      <PageHead title="글쓰기" />
      <PostUpsertPage />
    </>
  );
}
