import PostUpsertPage from "@/src/pages/post-upsert";
import PageHead from "@/src/components/pagehead";
import loginCheck from "@/src/components/loginCheck";

export default function Index() {
  loginCheck();
  
  return (
    <>
      <PageHead title="글쓰기" />
      <PostUpsertPage />
    </>
  );
}
