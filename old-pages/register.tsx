import PageHead from "../src/components/pagehead";

export default function Home() {
  const yearList = [];
  for (let i = 1960; i <= 2023; i++) yearList.push(i);

  return (
    <div className="bg-gradient-to-r from-orange-200 to-yellow-200 min-h-screen flex flex-col justify-center">
      <PageHead title="회원가입" />
      <div className="mx-auto w-full max-w-2xl">
        <div className="bg-white shadow w-full px-5 py-7 rounded-lg divide-y divide-gray-200">
          <div className="flex justify-center mb-2">
            <button onClick={() => {}} className="Button-colored">
              휴대폰 소유 인증
            </button>
          </div>
          <form
            className="pt-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="Form-label">아이디</label>
            <input type="text" className="Form-input" />
            <label className="Form-label">비밀번호</label>
            <input type="password" className="Form-input" />
            <label className="Form-label">비밀번호 다시 입력</label>
            <input type="password" className="Form-input" />
            <div className="grid grid-cols-2">
              <div>
                <label className="Form-label">중학교</label>
                <input type="text" className="Form-input" />
              </div>
              <div>
                <label className="Form-label">졸업년도</label>
                <select className="Form-input">
                  {yearList.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <label className="Form-label">고등학교</label>
                <input type="text" className="Form-input" />
              </div>
              <div>
                <label className="Form-label">졸업년도</label>
                <select className="Form-input">
                  {yearList.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            <input
              type="submit"
              value="회원가입"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="w-full Button-colored"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
