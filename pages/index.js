import React from 'react'
import Head from 'next/head'


export default () => (
  <section className="container gradient">
    <Head>
      <title>Carlos Sz</title>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
    </Head>

    <div className="menu">
      <div className="img-container">
        <img src="/static/cartoon-head.svg" alt="Cartoon"/>
      </div>
      <ul>
        <li><a href="/contact">Biografia</a></li>
        <li><a href="/bio">Contacto</a></li>
      </ul>
    </div>

    <div className="logo">
      <img src="/static/logo.png" alt="logo"/>
    </div>

    <div className="footer">
      <ul>
        <li><a href="https://www.twitter.com/icarlossz" target="_blank">Twitter</a></li>
        <li><a href="https://co.linkedin.com/in/carlossz" target="_blank">LinkedIn</a></li>
        <li><a href="https://www.github.com/icarlossz" target="_blank">Github</a></li>
        <li><a href="https://www.behance.net/carlossz" target="_blank">Behance</a></li>
        <li><a href="https://www.instagram.com/icarlossz/" target="_blank">Instagram</a></li>
        <li><a href="https://medium.com/@carlossz" target="_blank">Medium</a></li>
      </ul>
    </div>

    <style jsx>{`
      .gradient { background-color: #000; }
      .container{
        font-family:Open Sans;
        font-size: 11px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color:rgba(255,255,255,.5);
        display:flex;
        display:-webkit-flex;
        display:-moz-flex;
        display:-ms-flex;
        justify-content:center;
        align-items: center;
        -webkit-flex-direction: column;-moz-flex-direction: column;-ms-flex-direction: column;-o-flex-direction: column;flex-direction: column;
      }
      .menu {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        width: 95%;
        max-width: 850px;
        margin: 0 auto;
        padding: 0;
        display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
        flex-direction: row;
      }
      .menu ul { width: 50%; margin: 0; justify-content: flex-end !important; }
      .menu ul li { text-align: right; margin-left: 2%; }
      .menu .img-container {
        width: 50%;
      }
      .menu .img-container img {
        width: 50px;
      }
      .logo, .footer, .menu { padding: 2% 4%; }
      .logo{
        position:relative;
        max-height: 150px;
        height: 20vw;
        display: block;
      }
      .logo img{
        width: auto;
        height: 100%;
      }
      .footer{
        max-width: 650px;
        width: 75%;
        margin: auto;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
      }
      .menu ul,
      .footer ul{
        display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
        justify-content: space-around;
        list-style: none;
        text-align: center;
        padding: 0;
        -webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
      }
      .menu ul li,
      .footer ul li{
        display: block;
        margin: 10px;
      }
      .menu ul li a,
      .footer ul li a{
        text-decoration: none;
        color: inherit;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s;
        padding: 7px 11px;
      }
      .menu ul li a:hover,
      .footer ul li a:hover{
        color: #c1c1c1;
        border-bottom: 1px solid #c1c1c1;
        font-size: 12px;
      }

      @media screen and (max-width: 800px) {
        .footer { min-width: 90%; }
        .footer ul li a {
          display: block;
          border: 2px solid rgba(255,255,255,.5);
          border-radius: 2px;
        }
        .footer ul li a:hover {
          border: none;
          border-bottom: 1px solid #c1c1c1;
        }
      }

    `}</style>

  </section>
)