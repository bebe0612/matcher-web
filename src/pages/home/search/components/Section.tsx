export default function Section() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  우리 학교 알아보기
                </h2>

                <p className="mt-4 text-gray-500">
                  우리 학교는 지금 어떻게 바뀌었을까요?
                </p>
              </header>

              <a
                href="#"
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
              >
                바로가기
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="block group">
                  <img
                    src="/school-01.png"
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      광운대의 새로운 소식
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                      광운대가 2023년을 들어 다시 태어납니다!
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="block group">
                  <img
                    src="/school-02.png"
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      비마관 재건축 확정!
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                      추억이 깃든 비마관, 과거와 미래를 확인해보아요.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
