import PageHead from "@/src/components/pagehead";
import Login from "@/src/pages/login";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    if (localStorage.getItem("gatherschool-token")) {
      router.push('/home');
    }
  }

  return (
    <>
      <PageHead title="로그인" />
      <Login />
    </>
  );
}
