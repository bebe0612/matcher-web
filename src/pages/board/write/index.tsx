import SideMenu from "@/src/components/SideMenu";
import PostUpsertPage from "@/src/pages/board/components/PostUpsertPage";

export default function Write() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex flex-col flex-grow">
        <PostUpsertPage />
      </div>
    </div>
  );
}
