import SearchScreen from "@/src/pages/home/search/SearchScreen";
import SideMenu from "@/src/components/SideMenu";

export default function Home() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col flex-grow">
        <SearchScreen />
      </div>
    </div>
  );
}
