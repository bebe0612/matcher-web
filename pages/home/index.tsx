import Home from "@/src/pages/home/index";
import PageHead from "@/src/components/pagehead";
import loginCheck from "@/util/loginCheck";

export default function Index() {
  loginCheck();

  return <>
    <PageHead title="홈" />
    <Home />
  </>;
}