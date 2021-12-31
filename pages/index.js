import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home({ allPostsData }) {
  const { t } = useTranslation("common");
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section class="prose lg:prose-xl">
        <p>{t("greetings")}</p>
        <p>{t("bioText")}</p>
      </section>

      <section class="prose lg:prose-xl">
        <h2 className={utilStyles.headingLg}>{t("articles")}</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
