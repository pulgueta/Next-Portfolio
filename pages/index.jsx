import Head from "next/head";

import Landing from "../components/Landing";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Andrés Rodríguez (pulgueta): Developer & Self taught Designer
        </title>
        <meta charSet="utf-8" />
        <meta name="author" content="Andrés Rodríguez (pulgueta)" />
        <meta
          name="description"
          content="Own personal portfolio, developed in NextJS, by Andrés Rodríguez"
        />
        <meta
          name="keywords"
          content="portfolio, nextjs, vercel, projects, chakra-ui, chakraui, styled, emotion"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing />
    </>
  );
};

export default Home;
