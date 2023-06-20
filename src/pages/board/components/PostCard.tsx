import Link from "next/link";

export interface postType {
  id: number;
  title: string;
  content: string;
  nickname: number;
  createdDt: number[];
}

export default function PostCard({ id, title, content, nickname, createdDt }: postType) {
  return (
    <>
      <Link
        className="h-60 block rounded-xl border border-gray-200 p-8 hover:shadow-lg transition hover:border-orange-500 hover:shadow-orange-200"
        href={`/board/${id}`}>

        <div className="flex items-center gap-2">
          <img
            alt="Man"
            src="/defaultprofile.svg"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-lg font-bold text-gray-800">
              {nickname}
            </p>
            <p className="text-xs text-gray-800">
              {createdDt[0]}/{createdDt[1]}/{createdDt[2]} {createdDt[3]}:{createdDt[4]}
            </p>
          </div>

        </div>

        <h2 className="mt-4 text-xl font-bold text-black">
          {title}
        </h2>

        <p className="mt-1 text-sm text-gray-800">
          {content.replace(/<[^>]*>?/g, ' ')}
        </p>

      </Link>
    </>
  );
}
