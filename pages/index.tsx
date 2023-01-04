import Head from "next/head";
import MainPage from "@components/MainPage/MainPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travcorp recruitment task</title>
        <meta name="description" content="Travcorp recruitment task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </>
  );
}
