import SideMenu from "@/src/pages/home/components/SideMenu";
import Header from "@/src/pages/home/components/Header";
import SearchScreen from "@/src/pages/home/search/SearchScreen";
import BoardScreen from "@/src/pages/home/board/BoardScreen";

export default function Home() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col flex-grow">
        <BoardScreen />
      </div>
    </div>
  );
}
