import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../components/editor/CKeditor"), {
  ssr: false,
});
export default function PostUpsertPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <div id="editor" className="mb-5">
          <Editor onChange={(data: any) => {}} name={undefined} value={""} />
        </div>
      </div>
    </div>
  );
}
