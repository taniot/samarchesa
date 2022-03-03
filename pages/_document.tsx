import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='preload'
            href='/fonts/Raleway/static/Raleway-Regular.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Raleway/static/Raleway-Medium.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Montserrat/Montserrat-Regular.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Montserrat/Montserrat-SemiBold.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Montserrat/Montserrat-Bold.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Lato/Lato-Regular.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Lato/Lato-Bold.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
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
