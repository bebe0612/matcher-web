import { useRouter } from "next/router";

export default function Index() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem("gatherschool-token");
    useRouter().push('/');
  }
  
  return (
    <>
      로그아웃 중입니다..
    </>
  )
}