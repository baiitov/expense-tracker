import { useState } from 'react'
import Button from '../../UI/button/Button'
import ExpenseForm from '../expense-form/ExpenseForm'

export const NewExpense = (props) => {
	let [state, setState] = useState(false) // true  // hook
	function addNewButtonHandler() {
		setState((state) => !state)
	}
	console.log('RENDER')
	return (
		<div
			style={{
				width: '600px',
				height: '300px',
				border: '3px solid pink',
				marginLeft: '200px',
			}}
		>
			{!state ? (
				<Button onClick={addNewButtonHandler}>
					добавить новый расход
				</Button>
			) : (
				<ExpenseForm
					ondata={props.ondataHandler}
					onAddnewButtonHandler={addNewButtonHandler}
				/>
			)}
		</div>
	)
}
// state
// render
// each component has own state
// lifting up
// children
// keys
