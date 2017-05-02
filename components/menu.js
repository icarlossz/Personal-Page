import React from 'react'
import Link from 'next/link'

export default () => (
	<article className="menu">
	  <div className="img-container">
	    <Link href="/"><img src="/static/cartoon-hb.svg" alt="Cartoon"/></Link>
	  </div>
	  <ul>
	    <li><Link href="/bio">
	    	<a>
	    		<svg>
		        <rect x="0" y="0" fill="none" width="100%" height="100%" />
		      </svg>
	    		Biografia
	    	</a>
	    </Link></li>
	    <li><Link href="/contact">
	    	<a>
	    		<svg>
		        <rect x="0" y="0" fill="none" width="100%" height="100%" />
		      </svg>
	    		Contacto
	    	</a>
	    </Link></li>
	  </ul>
	  <style jsx>{`
	  	.menu {
	  	  position: fixed;
	  	  top: 0;
	  	  right: 0;
	  	  left: 0;
	  	  width: 95%;
	  	  max-width: 850px;
	  	  margin: 0 auto;
	  	  padding: 2% 4%;
	  	  display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
	  	  flex-direction: row;
	  	}
	  	.menu ul { width: 50%; margin: 0; justify-content: flex-end !important; }
	  	.menu ul li { text-align: right; margin-left: 2%; }
	  	.menu .img-container {
	  	  width: 50%;
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
	  	}
	  	.menu ul li a {
	  	  text-decoration: none;
	  	  color: inherit;
	  	  text-transform: uppercase;
	  	  cursor: pointer;
	  	  transition: all 0.3s;
	  	  padding: 7px 11px;
	  	  position: relative;
	  	}
	  	.menu ul li a:hover {
	  	  color: #c1c1c1;
	  	  // border-bottom: 1px solid #c1c1c1;
	  	  font-size: 12px;
	  	}
			.menu ul li a::after {
				position: absolute;
			  -webkit-transition: .3s;
			  bottom: 0;
			  content: '';
			  transition: .3s;
			  width: 0;
		    left: -10%;
		    z-index: -1;
			}
			.menu ul li a:hover:after {
				left: -10%;
			  width: 120%;
			}
			.menu ul li a svg {
				position: absolute;
				top: 0;
				right: 0;
				width: 100%;
				height: 30px;
				z-index: 110;
				left: 0;
			}
			.menu ul li a rect {
		    fill: none;
		    stroke: #000;
		    stroke-width: 2;
		    stroke-dasharray: 422, 0;
		    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
		  }
			.menu ul li a:hover rect {
		    stroke-width: 3;
		    stroke: #FFF;
		    stroke-dasharray: 50, 210;
		    stroke-dashoffset: 125;
		  }
	  `}</style>
	</article>
)
