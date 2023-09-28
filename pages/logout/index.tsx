import useMyProfile from "@/src/components/MyProfileStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const { removeProfile } = useMyProfile();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("gatherschool-token");
    }
    removeProfile();
    router.push('/');
  }, [])

  return (
    <>
      로그아웃 중입니다..
    </>
  )
}