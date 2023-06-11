import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";

interface LoginFormTypes {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormTypes>();

  const onSubmit = (data: LoginFormTypes) => {
    axios.post("/v1/auth/signin", {
      email: data.email,
      password: data.password,
    }).then((res) => {
      const { token } = res.data;
      if (token) {
        localStorage.setItem('gatherschool-token', token);
        router.push('/home');
      }
      else alert("사용자 토큰을 받지 못했습니다.")
    }).catch((error) => {
      if (error.response) {
        if (error.response.status === 409) alert(error.response.data.msg);
        else alert("알 수 없는 이유로 인해 서버로부터 로그인이 거부되었습니다.");
      }
      else if (error.request) alert("서버로부터 응답을 받지 못했습니다.");
      else alert("알 수 없는 오류");
    });
  }

  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">게더스쿨</h1>

            <p className="mt-4 text-gray-500">
              내 동창들은 어디에 있을까요? <br />
              게더스쿨에서 찾아보세요.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  {...register("email", {
                    required: "이메일을 입력해 주세요.",
                    maxLength: {
                      value: 30,
                      message: "이메일은 30자 이하여야 합니다.",
                    }
                  })}
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="이메일을 입력해주세요"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>

              <span className="text-xs p-4 font-medium text-red-600">{errors.email?.message}</span>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  {...register("password", {
                    required: "비밀번호를 입력해 주세요.",
                  })}
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="비밀번호를 입력해주세요."
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>

              <span className="text-xs p-4 font-medium text-red-600">{errors.password?.message}</span>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                계정이 없나요?{" "}
                <Link className="underline" href="/sign-up">
                  여기를 눌러 회원 가입
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium border border-blue-600 text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                로그인
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="/home-friend.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
