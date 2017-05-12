import React, {Component} from 'react'
import {Layout, Button, Input} from '../components'

class Form extends Component {
	render() {
		return (
			<form action="//formspree.io/carlosszgreen" id="Form" method="POST">
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/alertifyjs/1.10.0/css/alertify.min.css"/>
				<style>{`
					.ajs-message {
						font-family: Montserrat;
					}
				`}</style>

				<h1 className="formTitle">Contacto</h1>
				<Input value="Nombre" name="name" />
				<Input value="Tel" type="tel" />
				<Input value="Email" type="email" name="_replyto" />
				<Input value="Subject" name="_subject" />
				<input type="hidden" name="_next" value="http://carlossz.co/" />
				<Input value="Mensaje" textarea />
				<Button id="sendEmail" msg="Send mail" big submit />
				<style>{`
					#Form {
						position: relative;
						display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
						justify-content: center;
						-ms-align-items: center;align-items: center;
						-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
						margin: 0 auto;
						width: 90vw;
						padding-top: 80px;
						max-width: 800px;
						font-family: Montserrat;
					}
					.formTitle {
						font-size: 30px;
						font-family: "Montserrat";
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						text-transform: uppercase;
						text-align: center;
						color: #FFF;
					}
					.ajs-message { bottom: 50px; }
					@media screen and (max-width: 768px) {
						#Form {padding: 100px 0 50px;}
					}
				`}</style>
				<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
				<script src="https://cdn.jsdelivr.net/alertifyjs/1.10.0/alertify.min.js"></script>
				<script src="/static/mail.js"></script>
			</form>
		)
	}
}

export default () => (<Layout title="Contacto" content={Form}/>)

