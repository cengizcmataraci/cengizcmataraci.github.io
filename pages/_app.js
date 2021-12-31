import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
