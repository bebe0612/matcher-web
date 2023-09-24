import PageHead from "@/src/components/pagehead";
import Chat from "@/src/pages/chat";
import loginCheck from "@/util/loginCheck";

export default function Index() {
  loginCheck();

  return (
    <>
      <PageHead title="채팅" />
      <Chat />
    </>
  );
}
