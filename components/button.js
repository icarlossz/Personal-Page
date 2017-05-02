import React from 'react'
import Link from 'next/link'

export default ({msg}) => (
	<div className="ButtonContainer">
		<Link href="/">
			<button className="Button">
				{msg}
			</button>
		</Link>
		<style jsx>{`
			.ButtonContainer {
				text-align: center;
				margin: 0 auto;
			}
			.Button {
				color: #FFF;
				background-color: transparent;
				font-family: inherit;
				padding:8px 12px;
				text-transform: uppercase;
		    border: 0.1px solid white;
		    margin-top: 5vh;
		    min-height: 33px;
		    position: relative;
        font-size: 12px;
        overflow:hidden;
        outline: 1px solid;
        outline-color: rgba(255, 255, 255, .5);
        outline-offset: 0px;
        -webkit-box-shadow: none;
        box-shadow: none;
        transition: .8s linear;
        z-index: 100;
			}
			.Button:hover {
				color: #000;
				background-color: #fff;
				outline-color: rgba(255, 255, 255, 0);
				  outline-offset: 15px;
				padding-bottom: 5px;
				box-shadow: 1px 1px 20px #427388;
			}
		`}</style>
	</div>
)