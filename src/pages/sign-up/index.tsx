import Link from "next/link";
import { useForm } from "react-hook-form";

interface SignUpFormTypes {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
  schoolName: string;
  enrolledYear: any;
  marketing_accept: boolean;
}

export default function SignUp() {
  const yearList: any[] = [""];
  for (let i = 1960; i <= 2023; i++) yearList.push(i);

  const { register, watch, handleSubmit, formState: { errors } } = useForm<SignUpFormTypes>();
  const FormSubmit = (data: SignUpFormTypes) => {
    //API
  }
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="/">
                <span className="sr-only">Home</span>
                <img src="/logo-white.png" width={200} />
              </a>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                게더스쿨에 오신 것을 환영합니다! 🎉
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                간단한 정보를 입력하고, 게더스쿨을 시작해보세요. <br />
                게더스쿨은 학교 동창들을 찾아주는 서비스입니다.
              </p>
            </div>
          </section>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <Link
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                  <img src="/logo2.png" width={40} />
                </Link>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  게더스쿨에 오신 것을 환영합니다! 🎉
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  간단한 정보를 입력하고, 게더스쿨을 시작해보세요. <br />
                  게더스쿨은 학교 동창들을 찾아주는 서비스입니다.
                </p>
              </div>

              <form onSubmit={handleSubmit(FormSubmit)} className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    이름
                  </label>

                  <input
                    {...register("name", {
                      required: "이름을 입력해 주세요.",
                      minLength: {
                        value: 2,
                        message: "이름은 2자 이상 10자 이하여야 합니다.",
                      },
                      maxLength: {
                        value: 10,
                        message: "이름은 2자 이상 10자 이하여야 합니다.",
                      },
                    })}
                    type="text"
                    id="Name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />

                  <span className="text-xs font-medium text-red-600">{errors.name?.message}</span>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    이메일
                  </label>

                  <input
                    {...register("email", {
                      required: "이메일을 입력해 주세요.",
                      maxLength: {
                        value: 30,
                        message: "이메일은 30자 이하여야 합니다.",
                      }
                    })}
                    type="email"
                    id="Email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  
                  <span className="text-xs font-medium text-red-600">{errors.email?.message}</span>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    비밀번호
                  </label>

                  <input
                    {...register("password", {
                      required: "비밀번호를 입력해 주세요",
                      minLength: {
                        value: 8,
                        message: "비밀번호는 8자 이상 20자 이하여야 합니다.",
                      },
                      maxLength: {
                        value: 20,
                        message: "비밀번호는 8자 이상 20자 이하여야 합니다.",
                      }
                    })}
                    type="password"
                    id="Password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />

                  <span className="text-xs font-medium text-red-600">{errors.password?.message}</span>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    비밀번호 확인
                  </label>

                  <input
                    {...register("password_confirmation", {
                      validate: (value) => value === watch("password") || "패스워드가 일치하지 않습니다."
                    })}
                    type="password"
                    id="PasswordConfirmation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />

                  <span className="text-xs font-medium text-red-600">{errors.password_confirmation?.message}</span>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="SchoolName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    출신 학교
                  </label>

                  <input
                    {...register("schoolName", {
                      required: "출신학교를 입력해 주세요.",
                      maxLength: {
                        value: 20,
                        message: "학교명은 20자 이하여야 합니다.",
                      }
                    })}
                    type="text"
                    id="SchoolName"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />

                  <span className="text-xs font-medium text-red-600">{errors.schoolName?.message}</span>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="EnrolledYear"
                    className="block text-sm font-medium text-gray-700"
                  >
                    입학년도
                  </label>
                  <select
                    {...register("enrolledYear", {
                      required: "입학년도를 선택해 주세요."
                    })}
                    id="EnrolledYear"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                    {yearList.map((year) => (
                      <option key={year}>{year}</option>
                    ))}
                  </select>

                  {errors.enrolledYear && <p className="text-xs font-medium text-red-600">{errors.enrolledYear?.message as string}</p>}
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      {...register("marketing_accept")}
                      type="checkbox"
                      id="MarketingAccept"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      게더스쿨에 동창이 등록될 때마다 이메일로 알림을 받습니다.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    계정을 만들면 게더스쿨의{"  "}
                    <a href="#" className="text-gray-700 underline">
                      서비스 이용약관
                    </a>
                    과{" "}
                    <a href="#" className="text-gray-700 underline">
                      개인정보 처리방침
                    </a>
                    을 동의하는 것으로 간주됩니다.
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    계정 생성
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    이미 계정이 있나요?{" "}
                    <Link href="/" className="text-gray-700 underline">
                      로그인하러 가기
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
