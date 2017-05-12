import React from 'react'
import Head from 'next/head'
import { Menu, Loader } from './'

export default (props) => {
  const Content = props.content
  return (
  <main role="content">
    <Head><title>Carlos Sz  |  {props.title}</title></Head>
    <Menu />
    <Loader />
    <Content />
  </main>
)}


