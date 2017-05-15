import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import { Footer } from '../components'

export default class Portafolio extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
        <title>Carlos Sz</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <link rel="shortcut icon" href="/static/head.png"/>
        <link rel="icon" href="/static/head.png" type="image/png"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Montserrat:200,400,700|Raleway:300" />
        <style>{`
          * { -webkit-box-sizing: border-box; box-sizing: border-box; }
          html { height: 100%; }
          body {
            background-color: #000;
            color: #FFF;
            min-height: 100%;
            display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
            margin: 0;
            padding: 0;
            flex-direction: column;
            overflow-x: hidden;
          }
          #content {
            flex: 1;
            padding-top: 70px;
            display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
            justify-content: center;
            -ms-align-items: center;align-items: center;
          }
        `}</style>
       </Head>
       <body>
        <div id="content">
          <Main />
          <NextScript />
        </div>
        <Footer />
       </body>
     </html>
    )
  }
}
