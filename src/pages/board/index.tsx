import SideMenu from "@/src/components/SideMenu";
import BoardScreen from "@/src/pages/board/BoardScreen";

export default function Board() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col flex-grow">
        <BoardScreen />
      </div>
    </div>
  );
}
