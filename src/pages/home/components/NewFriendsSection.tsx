import useMyProfile from "@/src/components/MyProfileStore";
import { UserDto } from "@/src/types/user-dto";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewFriendsSection() {
  const [alumniList, setAlumniList] = useState<UserDto[]>([]);
  const { myProfile } = useMyProfile();

  useEffect(() => {
    axios.get('/v1/alumni')
      .then((res) => {
        setAlumniList(res.data);
      })
      .catch((error) => { alert('오류') });
  },[]);

  const addFriend = (name: string, id: number) => {
    if (id === myProfile.id) {
      alert('자기 자신을 친구로 추가할 수 없습니다.');
    }
    else if (confirm(name + ' 님을 친구로 추가하시겠습니까?')) {
      axios.post('/v1/alumni/' + id)
        .then((res) => {
          console.log(res);
          alert(name + ' 님을 친구로 추가했습니다!');
        })
        .catch((error) => { alert('오류') });
    }
  };

  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                방금 가입한 동창들이에요 🎉
              </h2>

              <p className="mt-4 text-gray-600">
                이름과 한줄 소개만 보고 누군지 알아볼 수 있나요?
                <br />
                모르시겠다구요? 먼저 친구 추가를 요청하고 말을 걸어보세요.
                <br />
                친구가 되어주실 거에요! 🤝
              </p>

              <Link
                href="/search"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 active:outline-none active:ring active:ring-yellow-400"
              >
                더 많은 친구들 찾기 🤩
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {alumniList.map((alumni: UserDto) =>
                <button onClick={() => { addFriend(alumni.nickname, alumni.id) }} className="flex flex-col items-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 active:outline-none active:ring" key={alumni.id}>
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <img className="h-6 w-6" src='/alumni.svg' />
                  </span>

                  <h2 className="mt-2 font-bold">{alumni.nickname}</h2>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
