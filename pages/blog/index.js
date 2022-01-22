import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../src/components/layout";
import { Client } from "@notionhq/client";
import { useEffect } from "react";
import { getDatabase } from "../../src/lib/notion";
import { Text } from "../../src/components/text";

export const databaseId = process.env.NOTION_TABLE_ID;

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div class="text-stone-900 prose lg:prose-xl dark:text-neutral-400">
          <h3 class="text-3xl font-bold tracking-tighter text-stone-900 dark:text-neutral-300">
            Blog
          </h3>
          <ol>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  <a>
                    <Text text={post.properties.Name.title} />
                  </a>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
}
