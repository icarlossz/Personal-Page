import React, {Component} from 'react'
import {Layout, Spinner} from '../components'
import fetch from 'isomorphic-fetch'

const Repo = ({...props}) => {
	if (props.fork) return (<div style={{display: 'none'}}/>)
	return (
		<div className="repo">
			<h4>{props.name}</h4>
			<p>{props.description}</p>
			<a href={props.svn_url} target="_blank">
				<img src="/static/github.svg" width="25px" height="25px" />
				{props.full_name}
			</a>
			<svg>
				<line className="top" x1="0" y1="0" x2="900" y2="0" />
				<line className="left" x1="0" y1="-350" x2="0" y2="350" />
				<line className="bottom" x1="-600" y1="175" x2="300" y2="175" />
				<line className="right" x1="300" y1="-350" x2="300" y2="525" />
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
		const response = await fetch(`https://api.github.com/users/icarlossz/repos`)
		const data = await response.json()
		return this.setState({
			loading: false,
			repos: data,
		})
	}
	componentDidMount() { return this.fetchRepos() }
	render() {
		return (
			<article id="devRepositories">
				{this.state.loading && <Spinner />}
				{this.state.repos.map(repo => <Repo key={repo.id} {...repo} />)}
				<style>{`
					#devRepositories {
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
						height: 175px;
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
						z-index: 100;
						position: absolute;
						bottom: 10px;
						left: 0;
						right: 0;
						display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
						justify-content: center;
						-ms-align-items: center;align-items: center;
						-webkit-flex-direction: column;-moz-flex-direction: column;-ms-flex-direction: column;-o-flex-direction: column;flex-direction: column;
						color: #ccc;
						font-size: 11px;
						text-decoration: none;
						margin: 0 auto;
					}
					.repo:hover a {
						color: #067df7;
						text-decoration: underline;
					}
					.repo a img {
						display: block;
						margin-bottom: 5px;
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
					  stroke-dasharray: 175px;
					}
					.repo:hover svg line.left {
					  -webkit-transform: translateY(350px);
					  transform: translateY(350px);
					}
					.repo:hover svg line.right {
					  -webkit-transform: translateY(-350px);
					  transform: translateY(-350px);
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

export default () => (<Layout title="Developer" content={Repos}/>)
