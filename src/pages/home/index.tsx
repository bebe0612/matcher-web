import SideMenu from "@/src/pages/home/components/SideMenu";
import Header from "@/src/pages/home/components/Header";

export default function Home() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col flex-grow">
        <Header />
      </div>
    </div>
  );
}
