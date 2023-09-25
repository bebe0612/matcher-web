import SearchScreen from "@/src/pages/home/components/SearchScreen";
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
