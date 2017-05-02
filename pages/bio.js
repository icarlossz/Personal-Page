import React from 'react'
import {Layout, Button} from '../components'

const Bio = () => (
	<article id="bio">
		<style jsx>{`
			.content {
				position: absolute;
				top: 10%;
				display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
				justify-content: center;
				-ms-align-items: center;align-items: center;
				bottom: 10%;
				width: 80%;
				max-width: 1200px;
				overflow: auto;
				margin: auto;
				left: 10%;
				-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
				right: 10%;
			}
			.content::-webkit-scrollbar { display: none; }
			.logo{
			  position:relative;
			  width: 25%;
			  display: inline-block;
			}
			.text { width: 60%; margin-left: 8%; display: inline-block; padding-bottom: 50px; }
			.text h1 {
				color: #f6f6f6;
				font-size: 25px;
				text-transform: uppercase;
				font-family: 'Montserrat';
			}
			.text p {
				font-size: 14px;
				line-height: 20px;
				color: #f6f6f6;
				font-family: 'Raleway';
			}
			.logo img{
			  width: 100%;
			  height: auto;
			}
			.ButtonContainer {
				padding-right: 5px;
			}
			@media screen and (max-width: 850px) {
				.text,
				.logo {
					width: 60%;
					margin-left: 0;
					text-align: center;
					display: block;
				}
				.text { width: 80%; }
			}
			@media screen and (max-width: 614px) {
				.content {
					margin-bottom: 15%;
					padding-bottom: 50px;
				}
			}
			@media screen and (max-width: 514px) {
				.content {
					margin-bottom: 20%;
				}
			}
			@media screen and (max-width: 414px) {
				.content {
					margin-bottom: 25%;
				}
			}
		`}</style>
		<div className="content">
			<div className="logo">
			  <img src="/static/cartoon-blue.png" alt="logo"/>
			</div>
			<div className="text">
				<h1>Biografia</h1>
				<p>
					Mi nombre es Carlos Iván Suárez pero mi usuario en redes sociales siempre ha sido Carlos Sz, soy diseñador web de Colombia, todo mi conocimiento ha sido desarrollado de forma empírica ya que no me he llevado bien con los sistemas de educación tradicionales.
				</p>
				<p> Asistí durante seis semestres a la universidad a la carrera de Ingerniería Electromécanica pero no me sentía satisfecho con los conocimientos que me estaban impartiendo, por ese tiempo conocí la plataforma de mejorando.la posteriormente llamada Platzi y me enamoré de su plataforma y su comunidad y actualmente soy parte de ella. </p>
				<p> Mis conocimientos están enfocados en el diseño de interfaz de usuario (UI) y experiencia de usuario (UX), también se codear en html, css y estoy aprendiendo Javascript. </p>
				<p> Mi experiencia ha sido como técnico en sistemas al principio y áctualmente como Diseñador Web, el cargo que hasta el momento considero que es lo que deseo hacer toda mi vida y disfruto mucho. Soy parte del programa de expertos en productos de Google desde el año 2011 el cual me ha permitido conocer muchos países. </p>
				<p> Me encanta viajar, la música, la tecnología, el diseño, la programación, los idiomas (hablo Inglés fluído y estoy aprendiendo Francés) y salir de mi zona de confort siempre que puedo. </p>
				<Button msg="Descarga mi CV" />
			</div>
		</div>
	</article>
)

export default () => (<Layout title="Biography" content={Bio}/>)
