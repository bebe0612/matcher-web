import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar({ school, year }: { school: string, year: number }) {
  const router = useRouter();
  const currentID = "test-id";  // 동적으로 변경됨

  return (
    <nav className="max-w-5xl mx-auto flex justify-between rounded-3xl p-5 bg-white shadow-xl">
      <div className="flex gap-5">
        <img src="logo2.png" alt="로고 이미지" className="w-48 h-48" />
        <div className="flex flex-col gap-3 justify-center">
          <div className="text-5xl font-bold">{school}</div>
          <div>
            <span className="mx-2">{year}년 졸업</span>
            <button type="button" onClick={() => { }} className="Button-colored">학교 변경</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <div className="font-bold text-gray-600 flex gap-7 items-center">
          <Link href="">친구 목록</Link>
          <Link href="">설정</Link>
          <span>{currentID}</span>
          <button type="button" onClick={() => {
            router.push("/");
          }} className="Button-colored">로그아웃</button>
        </div>
      </div>
    </nav>
  );
}