import Image from "next/image";
import Head from "next/head";
import { Html } from "next/document";
//@ts-ignore
const MyApp = ({ Component, pageProps }) => (
  <main>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
