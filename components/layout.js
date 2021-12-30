import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Profile from "../public/img/profile.png";

const name = "Cengiz C. Mataraci";
export const siteTitle = "Cengiz C. Mataraci Personal Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Script
        id="profile"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
        let el = document.getElementById('profile')

        const height = el.clientHeight
        const width = el.clientWidth

        el.addEventListener('mousemove', handleMove)

        function handleMove(e) {
          const xVal = e.layerX
          const yVal = e.layerY

          const yRotation = 20 * ((xVal - width / 2) / width)

          const xRotation = -20 * ((yVal - height / 2) / height)

          const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

          el.style.transform = string
        }

        el.addEventListener('mouseout', function() {
          el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        })

        el.addEventListener('mousedown', function() {
          el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
        })

        el.addEventListener('mouseup', function() {
          el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
        })`,
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Cengiz C. Mataraci Personal Website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <div id="profile" className={styles.profile}>
            <Image
              priority
              src={Profile}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            </div>
        ) : (
          <div id="profile" className={styles.profile}>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={Profile}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
