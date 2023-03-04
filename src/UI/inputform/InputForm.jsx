import React from 'react'

const InputForm = (props) => {
	return (
		<div>
			<label htmlFor={props.id}>{props.labelName}</label>
			<br />
			<input
				type={props.type}
				placeholder={props.placeholder || ''}
				id={props.id}
				{...props}
			/>
		</div>
	)
}

export default InputForm

// Git
// Github
// commit, push
// branches
// local and remote branches