import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-new";
import customUploadAdapter from "./UploadAdapter";

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return customUploadAdapter(loader);
  };
}

function CEditor({ onChange, name, value }) {
  return (
    <div>
      <CKEditor
        type=""
        name={name}
        config={{
          extraPlugins: [MyCustomUploadAdapterPlugin],
        }}
        editor={Editor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
    </div>
  );
}

export default CEditor;
