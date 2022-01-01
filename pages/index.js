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

      <section class="text-stone-900 prose lg:prose-xl dark:text-neutral-400">
        <p>{t("greetings")}</p>
        <p>{t("bioText")}</p>
      </section>

      <section>
        <h2 class="text-stone-900 dark:text-neutral-300 mt-6 mb-5 text-2xl font-medium tracking-tight">
          {t("articles")}
        </h2>
        <ul class="list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li class="mb-4 text-stone-900 dark:text-neutral-400" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small class="text-neutral-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
