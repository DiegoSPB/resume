import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test</title>
      </Head>

      <main>
        <h1>
          hello
        </h1>
        <Link href="/resume"><a>resume</a></Link>
      </main>


      <style jsx>{`
      `}</style>
    </div>
  )
}
