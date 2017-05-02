import React from 'react'
import {Layout} from '../components'

const Home = () => (
	<article id="home">
		<style jsx>{`
			.logo {
			  position:relative;
			  max-height: 150px;
			  height: 20vw;
			  padding: 2% 4%;
			  display: block;
			}
			.logo img {
				text-align: center;
			  width: auto;
			  height: 100%;
			}
		`}</style>
		<div className="logo">
		  <img src="/static/logo.png" alt="logo"/>
		</div>
	</article>
)

export default () => (<Layout title="Home" content={Home}/>)
