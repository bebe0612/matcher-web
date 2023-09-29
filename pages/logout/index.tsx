import useMyProfile from "@/src/components/MyProfileStore";
import useCurrentFriend from "@/src/pages/chat/logic/currentFriendStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const { removeProfile } = useMyProfile();
  const { setCurrentFriend } = useCurrentFriend();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("gatherschool-token");
    }
    removeProfile();
    setCurrentFriend(-1);
    router.push('/');
  }, [])

  return (
    <>
      로그아웃 중입니다..
    </>
  )
}