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
      content: "요번에 새로가입한 싱싱한 60기 아쎄이 황근출이라고 합니다!!",
    },
    {
      imgSrc: "https://images.newrepublic.com/4aa3c4e7c6c23682dff17fd422749bcd840a822b.jpeg?auto=compress&ar=3%3A2&fit=crop&crop=faces&fm=jpg&ixlib=react-9.0.2&w=958&q=65&dpr=1",
      writer: "트럼프",
      year:1970,
      title: "오냐 좋다",
      content: "바이든 내일이 니 제삿날인줄 알거라",
    },
    {
      imgSrc: "https://www.aljazeera.com/wp-content/uploads/2020/08/cdad9943b3564adbb0c4747ab7819375_18.jpeg?resize=770%2C513&quality=80",
      writer: "바이든",
      year:1970,
      title: "트럼프 나와",
      content: "내일 광운대역 앞에서 한판붙자",
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
