import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Cookie from "./cookie";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Index() {
  return (
    <>
      <Head>
        <title>Cookie Game</title>
        <meta name="description" content="Simple cookie clicker clone" />
      </Head>
      <Cookie></Cookie>
    </>
  );
}
