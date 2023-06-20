import Write from "@/src/pages/board/write";
import PageHead from "@/src/components/pagehead";
import loginCheck from "@/src/components/loginCheck";

export default function Index() {
  loginCheck();
  
  return (
    <>
      <PageHead title="글쓰기" />
      <Write />
    </>
  );
}
