import PageHead from "@/src/components/pagehead";
import Search from "@/src/pages/search";

export default function Index(){
  return (
    <>
      <PageHead title="친구 찾기" />
      <Search />
    </>
  );
}