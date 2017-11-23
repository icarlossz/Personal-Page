import React from 'react'
import {Layout, Button} from '../components'

const Bio = () => (
	<div className="description">
		<h1 className="Title">Biografia</h1>
		<div className="logo"><img src="/static/cartoon-blue.png" alt="Logo"/></div>
		<div className="txt">
			<h1 className="txtTitle">Biografia</h1>
			<p>Mi nombre es Carlos Iván Suárez pero en internet soy más conocido como Carlos Sz, soy Frontend Developer actualmente en Bogotá, Colombia, todo mi conocimiento ha sido desarrollado de forma empírica ya que no creo en los sistemas de educación tradicionales.</p>
			<p>Asistí durante seis semestres a la universidad a la carrera de Ingeniería Electromécanica pero no me sentía satisfecho con los conocimientos que me estaban impartiendo, por ese tiempo conocí la plataforma de mejorando.la posteriormente llamada Platzi, me enamoré de su plataforma y su comunidad y actualmente soy parte de ella. Junto con la plataforma de Treehouse son mis dos sitios preferidos para estudiar. </p>
			<p>Mis conocimientos están enfocados en el diseño de interfaz de usuario (UI) y experiencia de usuario (UX), también el desarrollo de sitios y aplicaciones web en Html, Css, Javascript, actualmente enfocandome en ReactJS.</p>
			<p>Mi experiencia ha sido como técnico en sistemas al principio, luego como Diseñador Web y áctualmente como líder de Frontend en la oficina de Bogotá de la multinacional DDB, el cargo que hasta el momento considero que es lo que deseo hacer toda mi vida y disfruto mucho. Soy parte del programa de expertos en productos de Google desde el año 2011 el cual me ha permitido conocer muchos países y vivir la cultura Googler a la cual espero pertenecer en poco tiempo.</p>
			<p>Me encanta viajar, la música, la tecnología, el diseño, la programación, los idiomas (hablo Inglés fluído y estoy aprendiendo Francés) y salir de mi zona de confort siempre que puedo ya que me parece la mejor forma de lograr grandes cosas.</p>
			<Button msg="Descarga mi CV" target href="//drive.google.com/file/d/0B_gktS92l6CCb1lfaGgyWTBOeDg/view" dark />
		</div>
		<style>{`
			.description {
				text-align: center;
				color: #FFF;
				width: 90%;
				margin: 0 auto;
				max-width: 1024px;
				font-family: Raleway;
			}
			.Title { text-transform: uppercase; text-align: center; font-family: Montserrat; }
			.txtTitle { display: none; text-transform: uppercase; font-family: Montserrat; }
			.logo {
				position: relative;
				padding-top: 50px;
				height: 60vh;
			}
			.logo img { width: auto; height: 100%; }
			.txt p {
				text-align: justify;
				font-size: 14px;
				line-height: 24px;
			}
			@media screen and (max-width: 1024px) {
				.description { padding-bottom: 50px; }
			}
			@media screen and (min-width: 1024px) {
				.txtTitle { display: block; }
				.Title { display: none; }
				.description {
					display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
					justify-content: center;
					max-width: 1200px;
					-ms-align-items: center;align-items: center;
					-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
				}
				.logo {
					width: 30%;
					padding-top: 20px;
					max-height: auto;
					height: auto;
				}
				.logo img { width: 100%; height: auto; }
				.txt {
					width: 65%;
					margin-left: 5%;
				}
			}
		`}</style>
	</div>
)

export default () => (<Layout title="Biografia" content={Bio}/>)
