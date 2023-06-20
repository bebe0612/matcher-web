import SideMenu from "@/src/components/SideMenu";
import PostGridSection from "@/src/pages/board/components/PostGridSection";
import BoardHead from "@/src/pages/board/components/BoardHead";

export default function Board() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col flex-grow">
        <BoardHead />
        <PostGridSection />
      </div>
    </div>
  );
}
