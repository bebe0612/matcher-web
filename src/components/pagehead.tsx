import Head from "next/head";

export default function PageHead({ title }: any) {
  return (
    <Head>
      <title>{title} - 게더스쿨</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}