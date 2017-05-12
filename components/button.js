import React from 'react'
import Link from 'next/link'

export default ({...props}) => {
	const href = props.href || '/'
	const msg = props.msg || 'Ir al Home'
	const id = props.id || ''
	const {target, dark, submit, big} = props
	const btn = (
		<button
			type={submit && 'submit'}
			id={id}
			className={`
				btn
				btn${big && 'Big' || ''}
				btn${dark && 'Dark' || 'Light'}
			`}
		>
			{msg}
		</button>
	)
	const anchor = (
		<a
			type={submit && 'submit'}
			id={id}
			target={target && '_blank'}
			className={`
				btn
				btn${big && 'Big' || ''}
				btn${dark && 'Dark' || 'Light'}
			`}
		>
			{msg}
		</a>
	)
	return (
		<div className="Button">
			{props.submit && btn || <Link href={href}>{anchor}</Link>}
			<style>{`
				.Button {
					font-family: Open Sans;
					font-size: 12px;
					text-align: center;
					margin: 0 auto;
					padding: 0;
				}
				.btn {
	        overflow: hidden;
	        display: inline-block;
	        outline: 1px solid;
	        outline-color: rgba(255, 255, 255, .5);
	        outline-offset: 0px;
	        text-decoration: none;
	        -webkit-box-shadow: none;
	        box-shadow: none;
	        transition: .8s linear;
	        padding: 8px 12px;
	        font-family: inherit;
  				text-transform: uppercase;
  		    border: 0.1px solid white;
  		    margin-top: 5vh;
  		    min-height: 33px;
  		    position: relative;
				}
				.btnBig { padding: 12px 15px; min-width: 150px; }
				.btnLight:hover,
				.btnDark { background: #000; color: #fff; border-color: #000; }
				.btnDark:hover,
				.btnLight { background: #fff; color: #000; border-color: #fff; }
				.btn:hover {
					outline-color: rgba(255, 255, 255, 0);
				  outline-offset: 15px;
					box-shadow: 1px 1px 20px #427388;
					border-radius: 2.5px;
				}
			`}</style>
		</div>
	)
}
