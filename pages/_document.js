import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const cssGlobal = `
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const description = 'Senior Software Engineer'
const icon = '/favicon.svg'
const image = '/image.png'
const name = 'Diego SPB'
const url = 'https://theworkofdiego.com'

class Doc extends Document {
  static async getServerSideProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { title } = this.props.__NEXT_DATA__.query

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>Diego Suarez Peredo | Tech Lead - Senior Software Engineer</title>
          <meta name="application-name" content={name} />
          <meta name="subject" content={description} />
          <meta name="name" itemProp="name" content={name} />
          <meta name="image" itemProp="image" content={image} />
          <meta name="url" itemProp="url" content={url} />
          <meta
            name="description"
            itemProp="description"
            content={description}
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={name} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
          <meta property="og:description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="referrer" content="always" />
          <meta name="robots" content="index, follow" />
          <link href={icon} color="#333" rel="mask-icon" />
          <link rel="prefetch" href="/" />
          <link rel="prefetch" href="/resume" />
          <link rel="prefetch" href="https://github.com/diegospb" />
          <style dangerouslySetInnerHTML={{ __html: cssGlobal }} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default Doc;

