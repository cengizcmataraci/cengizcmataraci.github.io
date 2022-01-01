import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article class="prose dark:prose-invert dark:text-neutral-300">
        <h1 class="text-3xl font-bold tracking-tighter text-stone-900 dark:text-neutral-300">
          {postData.title}
        </h1>
        <div class="text-neutral-500">
          <Date dateString={postData.date} />
        </div>
        <div
          class="text-stone-900 dark:text-neutral-400"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
