import React from 'react'

export default () => (
	<article className="footer">
		<style jsx>{`
			.footer {
			  max-width: 650px;
			  width: 75%;
			  margin: auto;
			  padding: 2% 4%;
			  position: fixed;
			  bottom: 0;
			  left: 0;
			  right: 0;
			  display: block;
			}
			.footer{
			  max-width: 650px;
			  width: 75%;
			  margin: auto;
			  position: fixed;
			  bottom: 0;
			  left: 0;
			  right: 0;
			  display: block;
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
			  padding: 7px 11px;
			}
			.footer ul li a:hover{
			  color: #c1c1c1;
			  border-bottom: 1px solid #c1c1c1;
			  font-size: 12px;
			}

			@media screen and (max-width: 800px) {
			  .footer { min-width: 90%; }
			  .footer ul li a {
			    display: block;
			    border: 2px solid rgba(255,255,255,.5);
			    border-radius: 2px;
			  }
			  .footer ul li a:hover {
			    border: none;
			    border-bottom: 1px solid #c1c1c1;
			  }
			}
		`}</style>
	  <ul>
	    <li><a href="https://www.twitter.com/icarlossz" target="_blank">Twitter</a></li>
	    <li><a href="https://co.linkedin.com/in/carlossz" target="_blank">LinkedIn</a></li>
	    <li><a href="https://www.github.com/icarlossz" target="_blank">Github</a></li>
	    <li><a href="https://www.behance.net/carlossz" target="_blank">Behance</a></li>
	    <li><a href="https://www.instagram.com/icarlossz/" target="_blank">Instagram</a></li>
	    <li><a href="https://medium.com/@carlossz" target="_blank">Medium</a></li>
	  </ul>
	</article>
)
