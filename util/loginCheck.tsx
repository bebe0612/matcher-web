import axios from "axios";
import { useRouter } from "next/router";

export default function loginCheck(){
  const router = useRouter();
  axios.get("/v1/users/me"
  ).then((res) => {
    //console.log(res);
  }).catch((error) => {
    router.push('/');
  });
}