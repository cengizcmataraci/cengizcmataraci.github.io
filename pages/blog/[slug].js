import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { getDatabase, getPage, getBlocks } from "../../src/lib/notion";
import { databaseId } from "./index.js";
import { Text } from "../../src/components/text";
import Layout, { siteTitle } from "../../src/components/layout";
import { Client } from "@notionhq/client";
import slugify from "slugify";
import { useEffect } from "react";

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0].plain_text : "";
      return (
        <figure>
          <Image src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  useEffect(() => {
    console.log("page: ", page);
  });
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article
        className="prose dark:prose-invert dark:text-neutral-300"
        style={{ marginTop: -80 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter text-stone-900 dark:text-neutral-300">
          <Text text={page.properties.Name.title} />
        </h1>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
      </article>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  // const notion = new Client({
  //   auth: process.env.NOTION_TOKEN,
  // });

  // const data = await notion.blocks.children.list({
  //   block_id: process.env.NOTION_TABLE_ID,
  // });

  // const paths = [];

  // data.results.forEach((result) => {
  //   paths.push({
  //     params: {
  //       slug: slugify(result.properties.endpoint.rich_text[0].plain_text),
  //     },
  //   });
  // });

  // return {
  //   paths,
  //   fallback: false,
  // };
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({
      params: {
        slug: slugify(page.properties.endpoint.rich_text[0].plain_text),
      },
    })), //TODO:slugify ekle buraya önceki gibi
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const database = await getDatabase(databaseId);
  const { slug } = context.params;
  console.log("context: ", context);

  const post = database.find((b) => {
    const { endpoint } = b.properties.endpoint.rich_text[0].plain_text;
    const endpointSlug = slugify(endpoint);
    return endpointSlug === slug;
  });

  const page = await getPage(post.id);
  console.log("page: ", page);
  console.log("database: ", database);

  console.log("post: ", post);
  console.log("slug: ", slug);

  const blocks = await getBlocks(page.id);

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
