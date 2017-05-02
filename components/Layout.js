import React from 'react'
import Head from 'next/head'
import { Menu, Footer, Loader } from './'

export default (props) => {
  const Content = props.content
  return (
  <main role="content">
    <Head>
      <title>Carlos Sz | {props.title}</title>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <link href="/static/nprogress.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Montserrat|Raleway" rel="stylesheet" />
    </Head>
    <div id="la">
    <section id="container">
      <Loader />
      <Menu />
      <Content />
      <Footer />
    </section>
    </div>
    <style>{`
      #container {
        align-items: center;
        background-color: #000;
        bottom: 0;
        color:rgba(255,255,255,.5);
        display:-moz-flex;
        display:-ms-flex;
        display:-webkit-flex;
        display:flex;
        font-family:Open Sans;
        font-size: 11px;
        justify-content:center;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        -webkit-flex-direction: column;-moz-flex-direction: column;-ms-flex-direction: column;-o-flex-direction: column;flex-direction: column;
      }
    `}</style>
  </main>
)}


