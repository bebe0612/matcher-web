import axios from "axios";
// import uploadImage from "../../api/image-api";

const customUploadAdapter = (loader) => {
  return {
    async upload() {
      let file = await loader.file;

      // const res = await uploadImage(file);

      return {
        default: "",
      };
    },
  };
};

export default customUploadAdapter;
