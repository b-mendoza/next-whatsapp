import { Children } from 'react'
import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class NextDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = context.renderPage

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(context)

    return {
      ...initialProps,
      styles: [
        ...Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument
