import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div class="text-stone-900 prose lg:prose-xl dark:text-neutral-400">
          <h3 class="text-3xl font-bold tracking-tighter text-stone-900 dark:text-neutral-300">
            About Me
          </h3>
          <p>Just me.</p>
        </div>
      </section>
    </Layout>
  );
}
