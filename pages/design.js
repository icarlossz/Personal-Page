import React, {Component} from 'react'
import {Layout, Spinner} from '../components'
import fetch from 'isomorphic-fetch'

const Repo = ({...props}) => {
	if (props.fork) return (<div style={{display: 'none'}}/>)
	return (
		<div className="repo">
			<a href={props.url}>
				<h4>{props.name}</h4>
			</a>
			<img src={props.covers[230]}  />
			<div className="footer">
				{props.fields.map(field => <span>{field}</span>)}
				<div className="img">
					<a href={props.url} target="_blank"><img src="/static/behance.svg" /></a>
				</div>
			</div>
			<svg>
				<line className="top" x1="0" y1="0" x2="900" y2="0" />
				<line className="left" x1="0" y1="-800" x2="0" y2="400" />
				<line className="bottom" x1="-600" y1="400" x2="300" y2="400" />
				<line className="right" x1="300" y1="0" x2="300" y2="1200" />
			</svg>
		</div>
	)
}

class Repos extends Component {
	constructor(props) {
		super(props)
		this.state = {
			repos: [],
			loading: true,
		}
	}
	async fetchRepos() {
		const response = await fetch(`/static/behance.json`)
		const data = await response.json()
		return this.setState({
			loading: false,
			repos: data.projects,
		})
	}
	componentDidMount() { return this.fetchRepos() }
	render() {
		return (
			<article id="designRepositories">
				{this.state.loading && <Spinner />}
				{this.state.repos.map(repo => <Repo key={repo.id} {...repo} />)}
				<style>{`
					#designRepositories {
						display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
						justify-content: space-between;
						-ms-align-items: center;align-items: center;
						-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
						max-width: 768px;
						width: 90%;
						margin: 0 auto;
						padding: 70px 0;
					}
					.repo {
						position: relative;
						margin: 15px;
						height: 400px;
						box-shadow: inset 0 0 0 3px #2c3e50;
						transition: all 0.4s 0.1s;
						padding: 10px;
						width: 300px;
						font-family: Raleway;
						font-size: 12px;
						box-shadow: 0px 0px 0 #000;
						background-color: #000;
					}
					.repo:hover {
						-webkit-transition-delay: 0s;
						transition-delay: 0s;
						box-shadow: 5px 5px 0 #067df7;
					}
					.repo h4 {
						margin: 0;
						font-size: 14px;
						width: 100%;
						border-bottom: 1px solid #fff;
						padding: 10px 0;
					}
					.repo a {
						z-index: 101;
						color: #FFF;
						text-align: center;
						cursor: pointer;
						text-decoration: none;
					}
					.repo:hover a {
						color: #067df7;
						// text-decoration: underline;
					}
					.repo img {
						display: block;
						margin: 5%;
						width: 90%;
						filter: grayscale(.4);
					}
					.repo:hover img {
						filter: grayscale(0);
					}
					.repo .footer {
						text-align: center;
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
					}
					.repo .footer .img {
						margin: 0 auto;
						text-align: center;
						border-radius: 5%;
						margin: 0 auto;
						width: 50px;
						width: 50px;
						padding: 10px;
						position: relative;
						display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
						justify-content: center;
						-ms-align-items: center;align-items: center;
						margin-top: 5px;
					}
					.repo .footer .img a {
						z-index: 200;
					}
					.repo .footer span {
						margin: 0 5px;
						font-size: 10px;
					}
					.repo .footer .img img {
						width: 100%;
						height: 100%;
						cursor: pointer;
					}
					.repo .footer .img:after {
						content: '';
						position: absolute;
						border-radius: 50%;
						width: 37px;
						height: 37px;
						transition: all .3s;
					}
					.repo:hover .footer .img:after {
						border: 2px dashed #2563be;
						animation: spinAround 3s linear infinite;
					}
					.repo:hover .footer .img:hover:after {
						width: 40px;
						height: 40px;
					}
					.repo:hover .footer .img:hover:after {
						border-color: #3851bc;
						border-style: dotted;
						-webkit-animation: sonarEffect 6s linear 75ms;
						-moz-animation: sonarEffect 2s linear 75ms;
						animation: sonarEffect 2s linear 75ms;
					}

					@keyframes sonarEffect {
						0% {
							opacity: 0.3;
						}
						20% {
							opacity: 0.5;
							box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 5px 5px #3851bc, 0 0 0 5px rgba(255,255,255,0.5);
						}
						60% {
							box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 8px 8px #3851bc, 0 0 0 8px rgba(255,255,255,0.5);
							-webkit-transform: scale(1.5);
							opacity: 0;
						}
						61% {
							opacity: 0.5;
							box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 5px 5px #3851bc, 0 0 0 5px rgba(255,255,255,0.5);
						}
						100% {
							opacity: 0.3;
						}
					}
					.repo svg {
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
					.repo:hover svg line.top {
					  -webkit-transform: translateX(-600px);
					  transform: translateX(-600px);
					}
					.repo:hover svg line.bottom {
					  -webkit-transform: translateX(600px);
					  transform: translateX(600px);
					}
					.repo svg line.left,
					.repo svg line.right {
					  stroke-dasharray: 400px;
					}
					.repo:hover svg line.left {
					  -webkit-transform: translateY(800px);
					  transform: translateY(800px);
					}
					.repo:hover svg line.right {
					  -webkit-transform: translateY(-800px);
					  transform: translateY(-800px);
					}
					@keyframes spinAround {
						from {
							transform: rotate(0deg)
						}
						to {
							transform: rotate(360deg);
						}
					}
					@media screen and (max-width: 736px) {
						#devRepositories {
							justify-content: space-around;
							padding: 30px 0;
						}
						.repo { margin: 20px; border: 1px solid #fff; }
						.repo svg { display: none; }
					}
				`}</style>
			</article>
		)
	}
}

export default () => (<Layout title="Designer" content={Repos}/>)
