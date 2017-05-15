import React from 'react'
import Link from 'next/link'

export default () => (
	<article className="menu">
	  <div className="img-container">
	    <Link prefetch href="/"><img src="/static/cartoon-hb.svg" alt="Cartoon"/></Link>
	  </div>
	  <ul>
	    <li><Link prefetch href="/bio">
    		<a>
   				<svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
   				Biografia
    			<div className="mobile"><img src="/static/avatar.svg" alt="Bio"/></div>
    		</a>
	    </Link></li>
	    <li><Link prefetch href="/portafolio">
	    	<a>
    			<svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
    			Portafolio
	    		<div className="mobile"><img src="/static/portafolio.svg" alt="Portafolio"/></div>
	    	</a>
	    </Link></li>
	    <li><Link prefetch href="/contact">
	    	<a>
    			<svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
    			Contacto
	    		<div className="mobile"><img src="/static/mail.svg" alt="Contact"/></div>
	    	</a>
	    </Link></li>
	  </ul>
	  <style>{`
	  	.menu {
	  	  position: fixed;
	  	  color: #f3f3f3;
	  	  background-color: #000;
	  	  z-index: 200;
	  	  top: 0;
	  	  right: 0;
	  	  left: 0;
	  	  width: 100%;
	  	  max-width: 850px;
	  	  margin: 0 auto;
	  	  padding: 2% 4%;
	  	  display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
	  	  flex-direction: row;
	  	  font-family: Raleway;
	  	  font-weight: 300;
	  	  font-size: 12px;
	  	}
	  	.menu ul { width: 70%; margin: 0; justify-content: flex-end !important; }
	  	.menu ul li { text-align: right; margin-left: 2%; }
	  	.menu .img-container {
	  	  width: 30%;
	  	  cursor: pointer;
	  	}
	  	.menu .img-container img {
	  	  width: 50px;
	  	}
	  	.menu ul {
	  	  display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
	  	  justify-content: space-around;
	  	  list-style: none;
	  	  text-align: center;
	  	  padding: 0;
	  	  -webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
	  	}
	  	.menu ul li {
	  	  display: block;
	  	  margin: 10px;
	  	  position: relative;
	  	}
	  	.menu ul li div {
	  		margin: 0;
	  		padding: 0;
	  		position: absolute;
	  		top: 0;
	  		bottom: 0;
	  		right: 0;
	  		left: 0;
	  	}
	  	.menu .mobile { display: none; }
	  	.menu a {
	  	  text-decoration: none;
	  	  color: inherit;
	  	  text-transform: uppercase;
	  	  cursor: pointer;
	  	  transition: all 0.3s;
	  	  padding: 7px 11px;
	  	  position: relative;
	  	  font-family: inherit;
	  	  font-weight: inherit;
	  	  font-size: inherit;
	  	}
	  	.menu ul li a:hover {
	  	  color: #c1c1c1;
	  	  font-size: 12px;
	  	}
			.menu a::after {
				position: absolute;
			  -webkit-transition: .3s;
			  bottom: 0;
			  content: '';
			  transition: .3s;
			  width: 0;
		    left: -10%;
		    z-index: -1;
			}
			.menu a:hover:after {
				left: -10%;
			  width: 120%;
			}
			.menu a svg {
				position: absolute;
				top: 0;
				right: 0;
				width: 100%;
				height: 30px;
				z-index: 110;
				left: 0;
			}
			.menu a rect {
		    fill: none;
		    stroke: #000;
		    stroke-width: 2;
		    stroke-dasharray: 422, 0;
		    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
		  }
			.menu a:hover rect {
		    stroke-width: 3;
		    stroke: #FFF;
		    stroke-dasharray: 50, 210;
		    stroke-dashoffset: 125;
		  }
			.menu a p {
		    margin: 0;
		    padding: 0;
		  }
		  @media screen and (orientation: landscape) and (max-height: 500px) {
        .menu { position: absolute !important; }
      }
      @media screen and (max-width: 500px) {
      	.menu a { position: static; color: #000;}
      	.menu a:hover { color: #000 !important;}
      	.menu a svg { display: none; }
      	.menu li {
      		position: relative;
      		width: 40px;
      		height: 40px;
      		margin: 5px 5px !important;
      	}
      	.menu .mobile {
      		display: block !important;
      		width: 100%;
      	}
      	.menu .mobile img {
      		width: 100%;
      		height: 100%;
      	}
      }
      @media screen and (min-width: 1248px) {
      	.menu {
      		max-width: 1200px;
      		width: 80%;
      		margin: 0 auto;
      	}
      }
	  `}</style>
	</article>
)
