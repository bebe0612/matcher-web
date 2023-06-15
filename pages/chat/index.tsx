import PageHead from "@/src/components/pagehead";
import axios from "axios";
import { useRouter } from "next/router";
import Chat from "@/src/pages/chat";

export default function Index() {
  const router = useRouter();
  axios
    .get("/v1/users/me")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      router.push("/");
    });

  return (
    <>
      <PageHead title="홈" />
      <Chat />
    </>
  );
}
