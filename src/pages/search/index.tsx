import axios from "axios";
export default function Search() {
  axios.get('/v1/home')
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