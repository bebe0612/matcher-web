import axios from "axios";
export default function Search() {
  axios.get('/v1/users/me') // 테스트
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>

    </>
  );
}