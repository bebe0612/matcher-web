import axios from "axios";
export default function Search() {
  axios.get('/v1/alumni') // 테스트
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>

    </>
  );
}