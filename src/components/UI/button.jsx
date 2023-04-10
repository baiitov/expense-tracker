import './Button.css'
function Button(props) {
	return (
		<button className='button-add'
			onClick={props.onClick}
			style={{
				padding: '20px',
				backgroundColor: ' #4A026B',
				color: 'white',
				border: 'none',
			}}
		>
			{props.children}
		</button>
	)
}
export default Button
