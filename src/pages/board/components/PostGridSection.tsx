import PostCard, { postType } from "@/src/pages/board/components/PostCard";

export default function PostGridSection() {
  let postList: postType[] = [
    {
      imgSrc: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      writer: "제임스",
      year:2005,
      title: "안녕하세요",
      content: "52회졸업생 제임스라고 합니다",
    },
    {
      imgSrc: "/defaultprofile.svg",
      writer: "김나은",
      year:2010,
      title: "졸업작품",
      content: "힘들어용",
    },
    {
      imgSrc: "/defaultprofile.svg",
      writer: "이덕재",
      year:2011,
      title: "7월에 55기 만날사람",
      content: "모집합니다~",
    },
    {
      imgSrc: "/defaultprofile.svg",
      writer: "김효진",
      year:2013,
      title: "나아는사람있니",
      content: "2학년 5반",
    },
    {
      imgSrc: "/defaultprofile.svg",
      writer: "황근출",
      year:2020,
      title: "필승!!",
      content: "요번에 새로가입한 싱싱한 65기 아쎄이 황근출이라고 합니다!!",
    },
    {
      imgSrc: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
      writer: "이서은",
      year:2015,
      title: "60기 다음주 밥먹으실분",
      content: "광운대역앞으로 가능??",
    },
    {
      imgSrc: "https://images.pexels.com/photos/3385228/pexels-photo-3385228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      writer: "에디",
      year:2016,
      title: "안녕하세요",
      content: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
    },
    {
      imgSrc: "/defaultprofile.svg",
      writer: "Johnson",
      year:2001,
      title: "Hello",
      content: "Hello my name is Boris Johnson",
    },
    {
      imgSrc: "https://www.technotification.com/wp-content/uploads/2022/01/KEWK-twitch.jpg",
      writer: "관리자",
      year:2000,
      title: "테스트입니다",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?",
    },
  ]
  return (
    <>
      <section className="text-white ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {postList.map((post) => (
              <PostCard imgSrc={post.imgSrc} title={post.title} content={post.content} writer={post.writer} year={post.year}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
