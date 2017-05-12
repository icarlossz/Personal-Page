import React from 'react'

export default () => (
	<article className="footer">
	  <ul>
	    <li>
	    	<a href="https://www.twitter.com/icarlossz" target="_blank">
	    		Twitter
	    		<div className="img">
	    			<img src="/static/twitter.svg" alt="Twitter" />
	    		</div>
	    	</a>
	    </li>
	    <li>
	    	<a href="https://co.linkedin.com/in/carlossz" target="_blank">
	    		LinkedIn
	    		<div className="img">
	    			<img src="/static/linkedin.svg" alt="LinkedIn" />
	    		</div>
	    	</a>
	    </li>
	    <li>
	    	<a href="https://www.github.com/icarlossz" target="_blank">
	    		Github
	    		<div className="img">
	    			<img src="/static/github.svg" alt="Github" />
	    		</div>
	    	</a>
	    </li>
	    <li>
	    	<a href="https://www.behance.net/carlossz" target="_blank">
	    		Behance
	    		<div className="img">
	    			<img src="/static/behance.svg" alt="Behance" />
	    		</div>
	    	</a>
	    </li>
	    <li>
	    	<a href="https://www.instagram.com/icarlossz/" target="_blank">
	    		Instagram
	    		<div className="img">
	    			<img src="/static/instagram.svg" alt="Instagram" />
	    		</div>
	    	</a>
	    </li>
	    <li>
	    	<a href="https://medium.com/@carlossz" target="_blank">
	    		Medium
	    		<div className="img">
	    			<img src="/static/medium.svg" alt="Medium" />
	    		</div>
	    	</a>
	    </li>
	  </ul>
	  <style>{`
	  	.footer{
	  	  max-width: 650px;
	  	  width: 75%;
	  	  margin: auto;
	  	  position: relative;
	  	  display: block;
	  	  font-family: Montserrat;
	  	  font-weight: 200;
	  	  color: #FFF;
	  	}
	  	.footer ul{
	  	  display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
	  	  justify-content: space-around;
	  	  list-style: none;
	  	  text-align: center;
	  	  padding: 0;
	  	  -webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
	  	}
	  	.footer ul li{
	  	  display: block;
	  	  margin: 10px;
	  	}
	  	.footer ul li a{
	  	  text-decoration: none;
	  	  color: inherit;
	  	  text-transform: uppercase;
	  	  cursor: pointer;
	  	  transition: all 0.3s;
	  	  position: relative;
	  	  padding: 7px 11px;
	  	  font-size: 12px;
	  	}
	  	.footer ul li a:hover{
	  	  color: #c1c1c1;
	  	}
	  	.footer ul li a:before {
	  		content: '';
	  		height: 1px;
				background: white;
				position: absolute;
				pointer-events: none;
				bottom: -5px;
				left: 0;
				right: 0;
				opacity: 0;
				transform: scale(0, 1);
				transition: all 200ms;
	  	}
	  	.footer ul li a:hover:before {
				opacity: 1;
				transform: scale(1, 1);
	  	}
  	  .footer ul a .img {
  	  	position: absolute;
  	  	top: 0;
  	  	left: 0;
  	  	right: 0;
  	  	height: 40px;
  	  	width: 100%;
	  	  opacity: 0;
	  	  transition: all linear .3s;
  	  }
  	  .footer ul .img img {
				height: 100%;
				width: auto;
  	  }
  	  .footer ul a:hover .img {
  	  	top: -50px;
	  	  opacity: 1;
  	  }
	  	@media screen and (max-width: 800px) {
	  	  .footer { min-width: 90%; }
	  	  .footer ul li { width: 25%; }
	  	  .footer ul a { color: #000 !important; }
	  	  .footer ul a .img {
	  	  	opacity: 1 !important;
	  	  	height: 25px;
	  	  }
	  	  .footer ul a:hover .img { opacity: .5 !important; top: 0 !important; }
	  	}
	  	@media screen and (min-width: 1024px) {
	  		.footer { padding-bottom: 20px; }
	  	}
	  	@media screen and (min-width: 1248px) {
      	.footer {
      		max-width: 1024px;
      		margin: 0 auto;
      	}
      }
	  `}</style>
	</article>
)
