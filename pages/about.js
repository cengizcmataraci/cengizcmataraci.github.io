import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../src/components/layout";

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div className="text-stone-900 prose lg:prose-xl dark:text-neutral-400">
          <h3 className="text-3xl font-bold tracking-tighter text-stone-900 dark:text-neutral-300">
            About Me
          </h3>
          <p>
            Hello there, I am Cengiz. I am a front-end developer from Turkey and
            I follow front-end technologies with amazement. I am currently
            working at{" "}
            <a
              href="https://www.trendyol.com"
              target="_blank"
              rel="noreferrer"
              className="visited:text-neutral-300 no-underline"
            >
              <b>Trendyol</b>
            </a>
            . Technology is my playground I usually fall down, get up and try
            not to fall down again.
          </p>
          <p>
            I&quot;m currently writing React.js and also keep learning. Also,
            I&quot;m very fond of Next.js and Three.js.
          </p>
          <p>
            I have been working as a volunteer in Kodluyoruz and Patika.dev
            communities for a long time. I have held many roles such as
            community manager, technical assistant, moderator. I believe it is
            very important to contribute to the community.
          </p>
          <p>
            I love literature, especially science fiction and fantasy genre.
            Ursula K. Le Guin and J.R.R. Tolkien are my all time favorites. But
            I&quot;ve read a lot of Philip K. Dick&quot;s novels, and no, I
            don&quot;t believe aliens are among us, yet. Also I like to watch
            space-themed TV series and movies, such as Star Trek.
          </p>
          <p>
            I would describe myself as a nerd. Why as a nerd instead of a geek?
            Because I think knowledge should come before the culture. It is
            highly important to know the culture but if it is not supported by
            knowledge, it would be just a myth. (Sometimes it&quot;s a good
            thing.)
          </p>
        </div>
      </section>
    </Layout>
  );
}
