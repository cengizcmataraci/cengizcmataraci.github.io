import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Profile from "../../public/img/profile.png";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Switch from "react-switch";
import { IconContext } from "react-icons";
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

const name = "Cengiz C. Mataraci";
export const siteTitle = "Cengiz C. Mataraci Personal Website";

export default function Layout({ children, home, about }) {
  const router = useRouter();
  // const { t, i18n } = useTranslation("about");
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setTheme(checked ? "dark" : "light");
  }, [checked, setTheme]);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  if (!isMounted) return null;

  // const changeLanguage = (lng) => {
  //   router.replace(router.pathname, router.pathname, { locale: lng });
  // };

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
        <link rel="icon" href="/favicon.png" />
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
      <header>
        <div style={{ position: "absolute", top: 35, right: 200 }}>
          <Switch
            onChange={handleChange}
            checked={checked}
            aria-label="theme switcher"
            offColor="#555"
            onHandleColor="#eee"
            handleDiameter={20}
            uncheckedIcon={
              <div className="flex justify-center items-center h-full">
                <IconContext.Provider
                  value={{
                    color: "gold",
                    size: "80%",
                  }}
                >
                  <IoSunnyOutline />
                </IconContext.Provider>
              </div>
            }
            checkedIcon={
              <div className="flex justify-center items-center h-full">
                <IconContext.Provider
                  value={{
                    color: "yellow",
                    size: "80%",
                  }}
                >
                  <IoMoon />
                </IconContext.Provider>
              </div>
            }
            height={24}
            width={48}
          />
          <div class="mt-7 text-lg font-bold tracking-tighter text-stone-900 dark:text-neutral-400">
            <Link href="/about" class="">
              <a>./about</a>
            </Link>
          </div>
          {/* TODO: multilanguage including markdown */}
          {/* <span> | </span>
          <button onClick={() => changeLanguage("tr")}>
            <strong>tr</strong>
          </button>
          <span> | </span>
          <button onClick={() => changeLanguage("en")}>
            <strong>en</strong>
          </button> */}
        </div>

        {home || about ? (
          <div id="profile" className={styles.profile}>
            <Image
              priority
              src={Profile}
              className={utilStyles.borderCircle}
              height={180}
              width={180}
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
                  height={120}
                  width={120}
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