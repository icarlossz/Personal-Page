import React from 'react'

export default () => (
	<span className="spinner-icon">
		<style>{`
			.spinner-icon {
        width: 25px;
        height: 25px;
        box-sizing: border-box;

        border: solid 2px transparent;
        border-top-color: #29d;
        border-left-color: #29d;
        border-radius: 50%;

        -webkit-animation: spinner 400ms linear infinite;
                animation: spinner 400ms linear infinite;
      }
			@-webkit-keyframes spinner {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
      @keyframes spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
		`}</style>
	</span>
)
