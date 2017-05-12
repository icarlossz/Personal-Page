import React from 'react'

export default ({...props}) => {
	const type = props.type || 'text'
	const value  = props.value || ''
	const name = props.name || value.toLowerCase() || ''
	const textarea = props.textarea || false
	const classNames = textarea && 'textarea' || 'input'
	return (
		<div className={`inputContainer ${textarea && 'textareaContainer'}`}>
			{textarea
				&& <textarea
							className={classNames}
							type={type}
							name={name}
							id={name.toLowerCase()}
							required
						/>
				|| <input
							className={classNames}
							type={type}
							name={name}
							id={name.toLowerCase()}
							required
						/>
			}
			<label className="label" htmlFor={name.toLowerCase()}>{value}</label>
			<style>{`
				.inputContainer {
					width: 42%;
					position: relative;
					display: inline-block;
					margin: 20px 3%;
					height: 30px;
					font-family: Raleway;
					font-size: 12px;
				}
				.textareaContainer { width: 90%; max-width: 90%; min-height: 100px; }
				.label {
					color: #f6f6f6;
					position: absolute;
					top: 7px;
					left: 10px;
					transition: .3s linear all;
				}
				.input:focus + .label,
				.input:valid + .label,
				.textarea:focus + .label,
				.textarea:valid + .label {
					top: -16px;
					left: 5px;
				}
				.input,
				.textarea {
					width: 100%;
					max-width: 100%;
					padding: 7px 15px;
					background: none;
					color: #FFF;
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					border: 2px solid #FFF;
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
				@media screen and (max-width: 768px) {
					.inputContainer { width: 90%; }
				}
			`}</style>
		</div>
	)
}
