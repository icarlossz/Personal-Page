import React from 'react'
import {Layout} from '../components'

const Logo = () => (
	<div className="logo">
		<img src="/static/logo.png" alt="Carlos SZ"/>
		<style>{`
			.logo {
			  position:relative;
			  text-align: center;
			  display: block;
			  width: 100%;
			}
			.logo img {
				  width: auto;
				  height: 30vw;
				  max-height: 160px;
			}
			@media screen and (orientation: landscape) {
				.logo img { height: 20vw; }
			}
			@media screen and (min-width: 1248px) {
			  .logo img { max-height: 200px !important; }
			}
		`}</style>
	</div>
)

export default () => (<Layout title="Home" content={Logo}/>)
