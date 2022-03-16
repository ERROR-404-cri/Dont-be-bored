import type { NextPage } from "next";
import Head from "next/head";
import SuggestionBox from "../components/HomePage/suggestionBox";
import SearchActivity from "../components/SearchActivity/SearchActivity";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dont be bored</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <SearchActivity></SearchActivity>
        <SuggestionBox></SuggestionBox>
      </main>
    </div>
  );
};

export default Home;
