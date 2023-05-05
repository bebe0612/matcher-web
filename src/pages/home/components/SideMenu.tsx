export default function SideMenu() {
  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e bg-white w-60">
        <div className="px-4 py-6">
          <img src="/logo.png" width={150} alt={""} className="mx-auto" />

          <nav aria-label="Main Nav" className="mt-10 flex flex-col space-y-1">
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/null/people-working-together.png"
                width={18}
              />

              <span className="text-sm font-medium"> 동창 찾기 </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/null/google-classroom.png"
                width={18}
              />

              <span className="text-sm font-medium"> 게시판 </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/null/chat.png"
                width={18}
              />

              <span className="text-sm font-medium"> 채팅 </span>
            </a>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <div className="flex items-center gap-2">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/48/null/user-male-circle.png"
                    width={18}
                  />

                  <span className="text-sm font-medium"> 계정 </span>
                </div>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>

                  <span className="text-sm font-medium"> 프로필 </span>
                </a>

                <form action="/logout">
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>

                    <span className="text-sm font-medium"> 로그아웃 </span>
                  </button>
                </form>
              </nav>
            </details>
          </nav>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">제임스</strong>

                <span> james@majes.com</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
