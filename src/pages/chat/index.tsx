import SearchScreen from "@/src/pages/home/search/SearchScreen";
import SideMenu from "@/src/components/SideMenu";
import BoardScreen from "@/src/pages/board/BoardScreen";

export default function Chat() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col flex-grow">
        <BoardScreen />
      </div>
    </div>
  );
}
