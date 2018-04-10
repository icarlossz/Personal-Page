import React from 'react'
import {Layout, Button} from '../components'

const Bio = () => (
	<div className="description">
		<h1 className="Title">Biografia</h1>
		<div className="logo"><img src="/static/cartoon-blue.png" alt="Logo"/></div>
		<div className="txt">
			<h1 className="txtTitle">Biography</h1>
			<p>My name is Carlos Iván Suárez but on the internet I use the username @iCarlosSz, I'm Frontend Developer currently living in Bogotá, Colombia, all my knowledge has been developed empirically because I don't believe in traditional education systems.</p>
			<p>I attended for six semesters at the university to the career of Electromechanical Engineering but I was not satisfied with the knowledge they were teaching me, for that time I got to know the Platzi platform, I fell in love with his platform and his community and now I am part of it. Along with the Treehouse platform they are my two favorite places to study. </p>
			<p>My knowledge is focused on user interface design (UI) and user experience (UX), also the development of web sites and applications in HTML, CSS, Javascript, currently focusing on ReactJS with Graphql, Redux and Apollo.</p>
			<p>My experience has been as a systems technician at first, then as a Web Designer and Frontend Developer in the multinational DDB and currently as a Frontend leader in a startup called ComparaMejor. I'm part of the Google's product expert program since 2011 which has allowed me to get to know many countries and experience the Googler culture from within, with its processes, methodologies and offices in several countries.</p>
			<p>I love travelling, music, technology, design, programming, languages (I speak fluent English and I am learning French) and getting out of my comfort zone whenever I can as it seems to me the best way to achieve great things.</p>
			<Button msg="Download my CV" target href="//drive.google.com/file/d/0B_gktS92l6CCb1lfaGgyWTBOeDg/view" dark />
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

export default () => (<Layout title="Biography" content={Bio}/>)
