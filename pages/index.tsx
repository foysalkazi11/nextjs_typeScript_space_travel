import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "./components/theme/navigation/Navigation";
import HomePage from "./components/pages/home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>space travel app</title>
        <meta name="description" content="spave travel app" />
        <link rel="icon" href="/assets/shared/logo.svg" />
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
