import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import Profile from "../public/img/profile.png";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hello there! I'm Cengiz!</p>
        <p>
          Software Developer who is open to learn new technologies especially in
          web programming. Trying to improve React.js and Javascript. Working
          with the aim of improving his knowledge in these fields. Currently
          working at
          <a href="https://www.navlungo.com">
            <strong> Navlungo</strong>
          </a>{" "}
          as Software Developer.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Yazılarım</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
