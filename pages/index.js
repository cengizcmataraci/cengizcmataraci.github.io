import Head from "next/head";
import Link from "next/link";
import Date from "../src/components/date";
import Layout, { siteTitle } from "../src/components/layout";
import { getSortedPostsData } from "../src/lib/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { BsGithub, BsLinkedin, BsMedium, BsTwitter } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { BiBrain } from "react-icons/bi";

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
        <div class="flex justify-center">
          <div class="mr-3">
            <a
              href="https://github.com/cengizcmataraci/"
              target="_blank"
              class="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
              alt="Github"
            >
              <BsGithub size="1.35rem" />
            </a>
          </div>
          <div class="mr-3">
            <a
              href="https://linkedin.com/in/cengizcmataraci/"
              target="_blank"
              class="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
            >
              <BsLinkedin size="1.35rem" />
            </a>
          </div>
          <div class="mr-3">
            <a
              href="https://twitter.com/saucecover/"
              target="_blank"
              class="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
            >
              <BsTwitter size="1.35rem" />
            </a>
          </div>
          <div class="mr-3">
            <a
              href="https://medium.com/@cengizcmataraci"
              target="_blank"
              class="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
            >
              <BsMedium size="1.35rem" />
            </a>
          </div>
          <div class="mr-3">
            <a
              href="mailto:cengizcmataraci@gmail.com"
              target="_blank"
              class="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
            >
              <MdMail size="1.35rem" />
            </a>
          </div>
          <div class="mr-3">
            <a
              href="https://www.kablosuzbeyin.com"
              target="_blank"
              class="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
            >
              <BiBrain size="1.35rem" />
            </a>
          </div>
        </div>
      </section>

      {/* <section>
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
      </section> */}
    </Layout>
  );
}
