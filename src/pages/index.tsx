import type { NextPage } from "next"
import Head from "next/head"
import { HomePage } from "../ui/home/pages/Home"

const Home: NextPage = function () {
  return (
    <div>
      <Head>
        <title>A4GeTI</title>
        <meta
          name="description"
          content="Application for generate test images"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  )
}

export default Home
