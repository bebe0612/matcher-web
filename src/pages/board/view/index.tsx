import SideMenu from "@/src/components/SideMenu";
import PostView from "@/src/pages/board/components/PostView";
import BoardHead from "@/src/pages/board/components/BoardHead";

export default function BoardView({ id }: any) {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col flex-grow">
        <BoardHead />
        <PostView id={id} />
      </div>
    </div>
  );
}
