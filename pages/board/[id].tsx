import loginCheck from "@/src/components/loginCheck";
import PageHead from "@/src/components/pagehead";
import BoardView from "@/src/pages/board/view";
import { useRouter } from "next/router"

export default function Index() {
  loginCheck();
  const router = useRouter();

  return (
    <>
      <PageHead title="게시판" />
      <BoardView id={router.query.id} />
    </>
  )
}