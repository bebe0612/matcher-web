import PageHead from "@/src/components/pagehead";
import Login from "@/src/pages/login";
import axios from "axios";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    axios.get('/v1/users/me')
    .then((res)=>{
      if (localStorage.getItem("gatherschool-token")) {
        router.push('/home');
      }
    })
    .catch((error)=>{});
  }

  return (
    <>
      <PageHead title="로그인" />
      <Login />
    </>
  );
}
