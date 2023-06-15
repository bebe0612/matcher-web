import NewFriendsSection from "@/src/pages/home/search/components/NewFriendsSection";
import Header from "@/src/components/Header";

export default function SearchScreen() {
  return (
    <>
      <Header title={"동창 찾기"} description={"동창을 찾아봐요! 🎉"} />
      <NewFriendsSection />
    </>
  );
}
