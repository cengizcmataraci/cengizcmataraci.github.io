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

      <section style={{ marginTop: -110 }}>
        <div className="text-stone-900 prose lg:prose-xl dark:text-neutral-400">
          <h3 className="text-3xl font-bold tracking-tighter text-stone-900 dark:text-neutral-300">
            Blog
          </h3>
        </div>
        <ol>
          {posts.map((post) => (
            <li
              className="mt-7 text-stone-900 dark:text-neutral-400"
              key={post.id}
            >
              <Link href={`/blog/${post.id}`}>
                <a className="text-2xl font-bold">
                  <Text text={post.properties.Name.title} />
                  <p className="text-lg font-thin">
                    {post.properties.description?.rich_text[0]?.plain_text}
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </ol>
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
