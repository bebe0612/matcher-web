import SideMenu from "@/src/components/SideMenu";
import Room from "@/src/pages/chat/components/Room";

export default function Chat() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col flex-grow">
        <Room />
      </div>
    </div>
  );
}
