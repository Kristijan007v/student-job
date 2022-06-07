import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { AuthProvider } from "../components/AuthProvider/AuthProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
