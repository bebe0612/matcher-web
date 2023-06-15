import Link from "next/link";

export interface postType {
  imgSrc: string;
  writer: string;
  title: string;
  content: string;
  year: number;
}

export default function PostCard({ imgSrc, title, content, writer, year }: postType) {
  return (
    <>
      <Link
        className="h-60 block rounded-xl border border-gray-200 p-8 hover:shadow-lg transition hover:border-orange-500 hover:shadow-orange-200"
        href="/services/digital-campaigns">

        <div className="flex items-center gap-2">
          <img
            alt="Man"
            src={imgSrc}
            className="h-10 w-10 rounded-full object-cover"
          />
          
          <div>
            <p className="text-lg font-bold text-gray-800">
              {writer}
            </p>
            <p className="text-xs text-gray-800">
              {year}년 입학
            </p>
          </div>

        </div>

        <h2 className="mt-4 text-xl font-bold text-black">
          {title}
        </h2>

        <p className="mt-1 text-sm text-gray-800">
          {content}
        </p>

      </Link>
    </>
  );
}
