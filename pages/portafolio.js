import React from 'react'
import Link from 'next/link'
import {Layout} from '../components'

const Portafolio = () => (
	<div id="portafolios">
		<Link href="/design">
			<article className="portafolio portafolioDesigner">
				<div className="img" />
				<h3>Designer</h3>
				<svg>
					<line className="top" x1="0" y1="0" x2="900" y2="0" />
					<line className="left" x1="0" y1="-800" x2="0" y2="400" />
					<line className="bottom" x1="-600" y1="400" x2="300" y2="400" />
					<line className="right" x1="300" y1="0" x2="300" y2="1200" />
				</svg>
			</article>
		</Link>
		<Link href="/dev">
			<article className="portafolio portafolioDev">
				<div className="img" />
				<h3>Developer</h3>
				<svg>
					<line className="top" x1="0" y1="0" x2="900" y2="0" />
					<line className="left" x1="0" y1="-800" x2="0" y2="400" />
					<line className="bottom" x1="-600" y1="400" x2="300" y2="400" />
					<line className="right" x1="300" y1="0" x2="300" y2="1200" />
				</svg>
			</article>
		</Link>
		<style>{`
			#portafolios {
				display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
				justify-content: space-around;
				-ms-align-items: center;align-items: center;
				-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
				margin: 0 auto;
				padding: 70px 0;
			}
			.portafolio {
				position: relative;
				cursor: pointer;
				background-color: #fff;
				margin: 15px 30px;
				height: 400px;
				box-shadow: inset 0 0 0 3px #2c3e50;
				transition: all 0.4s 0.1s;
				padding: 10px;
				width: 300px;
				font-family: Raleway;
				font-size: 12px;
				box-shadow: 0px 0px 0 #000;
				color: #000;
				text-align: center;
			}
			.portafolio:hover {
				-webkit-transition-delay: 0s;
				background-color: #000;
				color: #FFF;
				transition-delay: 0s;
				box-shadow: 5px 5px 0 #f55;
			}

			.portafolio .img {
				width: 50%;
				background-repeat: no-repeat;
				height: 200px;
				-webkit-background-size: contain;background-size: contain;
				background-position: center;
				margin: 20px auto 0;
			}
			.portafolioDesigner .img { background-image: url('/static/designer-color.svg'); }
			.portafolioDesigner:hover .img { background-image: url('/static/designer-white.svg'); }
			.portafolioDev .img { background-image: url('/static/atom-color.svg'); }
			.portafolioDev:hover .img { background-image: url('/static/atom-white.svg'); }

			.portafolio h3 {
				text-align: center;
				text-transform: uppercase;
				font-size: 20px;
				font-family: Raleway;
				font-weight: 300;
				position: absolute;
				bottom: 50px;
				left: 10px;
				right: 10px;
			}

			.portafolio svg {
				position: absolute;
				top: 0;
				left: 0;
				// right: 0;
				bottom: 0;
				height: 100%;
				width: 100%;
			}
			svg line {
				stroke-width: 2;
				stroke: #fff;
				fill: none;
				stroke-dasharray: 300;
				-webkit-transition: all 1s;
				transition: transform 1s;
			}
			.portafolio:hover svg line.top {
			  -webkit-transform: translateX(-600px);
			  transform: translateX(-600px);
			}
			.portafolio:hover svg line.bottom {
			  -webkit-transform: translateX(600px);
			  transform: translateX(600px);
			}
			.portafolio svg line.left,
			.portafolio svg line.right {
			  stroke-dasharray: 400px;
			}
			.portafolio:hover svg line.left {
			  -webkit-transform: translateY(800px);
			  transform: translateY(800px);
			}
			.portafolio:hover svg line.right {
			  -webkit-transform: translateY(-800px);
			  transform: translateY(-800px);
			}
		`}</style>
	</div>
)

export default () => (<Layout title="Portafolio" content={Portafolio}/>)
