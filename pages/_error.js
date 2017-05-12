import React from 'react'
import {Layout, Button} from '../components'


const Error = () => (
	<article id="error">
		<div className="errorMsg">
			<h1>404</h1>
			<h2>Lo sentimos, la pagina que buscas no existe...</h2>
			<style>{`
				.error { padding-bottom: 50px; }
				.errorMsg h1 {
					color: #FFF;
					display: inline-block;
					font-size: 20px;
					padding: 5px 20px;
					border-right: 2px solid #FFF;
				}
				.errorMsg h2 {
					font-weight: 100;
					padding: 0 20px;
					display: inline-block;
					color: #FFF;
				}
			`}</style>
		</div>
		<Button msg="Volver al Home" />
	</article>
)


export default () => (<Layout title="Not Found" content={Error} />)

