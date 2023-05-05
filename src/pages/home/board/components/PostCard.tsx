export default function PostCard() {
  return (
    <>
      <a
        className="h-60 block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/services/digital-campaigns"
      >
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-10 w-10 rounded-full object-cover"
        />

        <h2 className="mt-4 text-xl font-bold text-black">
          게더스쿨이 뭐에요?
        </h2>

        <p className="mt-1 text-sm text-gray-800">
          뭔지는 잘 모르겠지만 잘 부탁드립니다!
        </p>
      </a>
    </>
  );
}
