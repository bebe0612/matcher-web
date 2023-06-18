import PageHead from "@/src/components/pagehead";
import Board from "@/src/pages/board";
import loginCheck from "@/src/components/loginCheck";

export default function Index() {
  loginCheck();

  return (
    <>
      <PageHead title="게시판" />
      <Board />
    </>
  );
}
