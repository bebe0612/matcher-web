import NewFriendsSection from "@/src/pages/home/components/NewFriendsSection";
import Header from "@/src/components/Header";
import Section from "@/src/pages/home/components/Section";

export default function SearchScreen() {
  return (
    <>
      <Header title={"동창 찾기"} description={"동창을 찾아봐요! 🎉"} />
      <NewFriendsSection />
      <div className="h-16" />
      <Section />
    </>
  );
}
