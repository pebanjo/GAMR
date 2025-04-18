import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="no">
        <Head>
          <link rel="icon" href="/pages/images/gamrlogo.png" />
          {/* Du kan også legge til andre favicon-størrelser eller metadata her */}
          <link rel="apple-touch-icon" href="/gamrlogo-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/gamrlogo-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/gamrlogo-16x16.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
