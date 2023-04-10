import PageHead from "./components/pagehead";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2">
      <PageHead title="로그인" />
      <div className="bg-gray-300">
        LOGO
      </div>

      <div className="min-h-screen bg-gradient-to-r from-orange-200 to-yellow-200 flex flex-col justify-center">
        <div className="mx-auto w-full max-w-md">
          <div className="bg-white shadow w-full rounded-lg px-5 py-7">
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push("/main"); // 로그인 기능 구현 전까진 로그인 버튼을 누르면 바로 메인화면 이동
            }}>
              <label className="Form-label">아이디</label>
              <input type="text" className="Form-input w-full" />
              <label className="Form-label">비밀번호</label>
              <input type="password" className="Form-input w-full" />
              <input type="submit" value="로그인" className="text-orange-600 w-full py-2.5 rounded-lg text-sm shadow-sm font-semibold duration-200 border-solid border-gray-300 border bg-white hover:bg-gray-100 focus:shadow-sm focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 " />
            </form>
            <button onClick={() => router.push("/register")} type="button" className="mt-3 w-full Button-colored" >회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
}