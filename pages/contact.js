import React from 'react'
import {Layout} from '../components'

const Input = ({name, type = 'text', oname}) => (
	<div className="inputContainer">
		<style>{`
			.inputContainer {
				width: 40%;
				position: relative;
				display: inline-block;
				margin: 15px 25px;
				height: 45px;
			}
			label {
				position: absolute;
				bottom: 0;
				font-family: "Raleway";
				left: 0;
				color: rgba(255,255,255,.5);
				text-transform: uppercase;
				padding: 0 0 10px 12px;
				transition: .3s linear;
			}
			.input {
				width: 100%;
				font-family: "Raleway";
				padding: 7px 15px;
				background: none;
				color: #FFF;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				border: 1px solid #FFF;
				outline: 1px solid;
				outline-color: rgba(255, 255, 255, .3);
				outline-offset: 0px;
				-webkit-box-shadow: none;
				box-shadow: none;
				transition: .5s linear;
			}
			.input:focus {
				outline-color: rgba(255, 255, 255, 0);
				  outline-offset: 15px;
				box-shadow: 1px 1px 10px #427388;
			}
			.input:focus + .inputLabel,
			.input:valid + .inputLabel {
				padding: 0 0 40px 5px;
				color: #FFF;
				font-size: 10px;
			}
			@media screen and (max-width: 800px) {
				.inputContainer {
					display: block;
					width: 90%;
					margin: 25px auto;
				}
			}
			@media screen and (max-width: 600px) {
				.inputContainer {
					width: 100%;
					margin: 15px auto;
				}
				.input {
					padding-right: 0;
					padding-left: 0;
				}
			}
		`}</style>
		<input className="input" type={type} id={name.toLowerCase()} name={oname || name} required/>
		<label className="inputLabel" htmlFor={name.toLowerCase()}>{name}</label>
	</div>
)

const TextArea = ({name, type = 'text', oname}) => (
	<div className="textareaContainer">
		<style>{`
			.textareaContainer {
				width: 87.5%;
				position: relative;
				display: inline-block;
				margin: 25px 25px;
				height: 35px;
			}
			label {
				position: absolute;
				bottom: 0;
				font-family: "Raleway";
				left: 0;
				color: rgba(255,255,255,.5);
				text-transform: uppercase;
				padding: 0 0 10px 12px;
				transition: .3s linear;
			}
			.textarea {
				width: 100%;
				font-family: "Raleway";
				padding: 7px 15px;
				background: none;
				resize: vertical;
				color: #FFF;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				height: 90px;
				border: 1px solid #FFF;
				outline: 1px solid;
				outline-color: rgba(255, 255, 255, .3);
				outline-offset: 0px;
				-webkit-box-shadow: none;
				box-shadow: none;
				transition: .5s linear;
			}
			.textarea:focus {
				outline-color: rgba(255, 255, 255, 0);
				  outline-offset: 15px;
				// padding: 10px 12px 10px 12px;
				box-shadow: 1px 1px 10px #427388;
			}
			.textarea:focus + .inputLabel,
			.textarea:valid + .inputLabel {
				padding: 0 0 40px 5px;
				color: #FFF;
				font-size: 10px;
			}
			@media screen and (max-width: 800px) {
				.textareaContainer {
					display: block;
					width: 90%;
					margin: 25px auto;
				}
			}
			@media screen and (max-width: 600px) {
				.textareaContainer {
					width: 100%;
				}
				.textarea {
					padding-right: 0;
					padding-left: 0;
				}
			}
		`}</style>
		<textarea className="textarea" id="{name.toLowerCase()}" name={name} required />
		<label className="inputLabel" htmlFor="{name.toLowerCase()}">{name}</label>
	</div>
)

const ButtonSubmit = ({msg}) => (
	<div className="ButtonContainer">
		<button type="submit" className="Button">
			{msg}
		</button>
		<style jsx>{`
			.ButtonContainer {
				text-align: center;
				margin: 50px auto;
			}
			.Button {
				color: #000;
				background-color: white;
				font-family: inherit;
				padding: 12px 15px;
				text-transform: uppercase;
		    border: 0px solid #000;
		    border-radius: 2px;
		    cursor: pointer;
		    margin-top: 50px;
		    min-height: 33px;
		    min-width: 150px;
		    position: relative;
        font-size: 12px;
        overflow:hidden;
        outline: 1px solid;
        outline-color: rgba(255, 255, 255, .9);
        outline-offset: 0px;
        -webkit-box-shadow: none;
        box-shadow: none;
        transition: .8s linear;
        z-index: 100;
			}
			.Button:hover {
				color: #fff;
				background-color: #000;
				outline-color: rgba(255, 255, 255, 0);
				  outline-offset: 15px;
				box-shadow: 1px 1px 20px #427388;
			}
		`}</style>
	</div>
)

const Contact = () => (
	<article id="contact">
		<style jsx>{`
			#contact {
				width: 70%;
				max-width: 800px;
			}
			.Form {
			  position:relative;
			  display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
			  margin: 0 auto;
			  justify-content: center;
			  -ms-align-items: center;align-items: center;
			  width: 90%;
			  max-width: 800px;
			  padding-bottom: 30px;
			  display: block;
			}
			h1 {
				font-size: 30px;
				font-family: "Montserrat";
				text-transform: uppercase;
				text-align: center;
				color: #FFF;
			}
			@media screen and (max-width: 370px) {
				h1 { margin: 5px auto; }
			}
		`}</style>
		<form action="https://formspree.io/carlosszgreen@gmail.com" className="Form" method="POST">
			<h1>Contact</h1>
			<Input name="name" />
			<Input name="tel" type="tel" />
			<Input name="email" type="email" />
			<Input name="subject" oname="_subject"/>
			<input type="hidden" name="_next" value="//carlossz.co" />
			<TextArea name="message" />
			<ButtonSubmit msg="Send" />
		</form>
	</article>
)

export default () => (<Layout title="Contacto" content={Contact}/>)
