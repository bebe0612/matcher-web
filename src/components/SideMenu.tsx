import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import useMyProfile from "./MyProfileStore";

export default function SideMenu() {
  const router  = useRouter();
  const { myProfile, setMyProfile } = useMyProfile();
  if (myProfile.id == -1) {
    axios.get('/v1/users/me')
      .then((res) => {
        setMyProfile(res.data);
      })
      .catch((error) => {
        if(error.response.status === 401){
          alert('권한 없음');
          router.push('/');
        }
      });
  }

  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e bg-white w-60 sticky top-0">
        <div className="px-4 py-6">
          <Link href="/home">
            <img src="/logo.png" width={150} alt={""} className="mx-auto" />
          </Link>

          {/*// center*/}
          <div className="flex pt-3">
            <span className="text-sm font-medium text-center">
              {myProfile.schoolName}에 오신 것을 환영합니다.
            </span>
          </div>

          <nav aria-label="Main Nav" className="mt-5 flex flex-col space-y-1">
            <Link
              href="/home"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/null/people-working-together.png"
                width={18}
              />

              <span className="text-sm font-medium"> 동창 찾기 </span>
            </Link>

            <Link
              href="/chat"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/null/chat.png"
                width={18}
              />

              <span className="text-sm font-medium"> 채팅 </span>
            </Link>

            <Link href='/logout' className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <svg className="h-5 w-5 opacity-75 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>

              <span className="text-sm font-medium"> 로그아웃 </span>
            </Link>
          </nav>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <Link href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50" >
            <img src="/defaultprofile.svg" className="h-10 w-10 rounded-full object-cover" />

            <div className="flex flex-col text-gray-600">
              <span className="text-sm font-semibold">{myProfile.nickname}</span>
              <span className="text-xs">{myProfile.email}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
