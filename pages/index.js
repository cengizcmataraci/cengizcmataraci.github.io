import Head from "next/head";
import Layout, { siteTitle } from "../src/components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { BsGithub, BsLinkedin, BsMedium, BsTwitter } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { motion } from "framer-motion";
import styles from "../src/components/layout.module.css";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="text-stone-900 prose lg:prose-xl dark:text-neutral-400">
        <p>{t("greetings")}</p>
        <p>{t("bioText")}</p>
        <div className="flex justify-center">
          <div className="mr-3">
            <motion.button
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="https://github.com/cengizcmataraci/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
                alt="Github"
              >
                <BsGithub size="1.35rem" className={styles.github} />
              </a>
            </motion.button>
          </div>
          <div className="mr-3">
            <motion.button
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="https://linkedin.com/in/cengizcmataraci/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
              >
                <BsLinkedin size="1.35rem" className={styles.linkedin} />
              </a>
            </motion.button>
          </div>
          <div className="mr-3">
            <motion.button
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="https://twitter.com/saucecover/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
              >
                <BsTwitter size="1.35rem" className={styles.twitter} />
              </a>
            </motion.button>
          </div>
          <div className="mr-3">
            <motion.button
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="https://medium.com/@cengizcmataraci"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
              >
                <BsMedium size="1.35rem" />
              </a>
            </motion.button>
          </div>
          <div className="mr-3">
            <motion.button
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="mailto:cengizcmataraci@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
              >
                <MdMail size="1.35rem" className={styles.mail} />
              </a>
            </motion.button>
          </div>
          <div className="mr-3">
            <motion.button
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="https://www.kablosuzbeyin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 prose lg:prose-xl dark:text-neutral-400"
              >
                <BiBrain size="1.35rem" className={styles.brain} />
              </a>
            </motion.button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
