import ExpenseForm from '../expense-form/ExpenseForm'
import Button from '../UI/button'
import { useState } from 'react'
import './NewExpense.css'
const NewExpense = ({expenseFunc}) => {
	const [ishow, setIshow] = useState(false) // hook
	

	const isShowButtonHandler =  () => {
		setIshow((ishow) => !ishow) // !true
	}
	return (
		<div className='new-expense'>
			{ishow ? (
				<ExpenseForm expenseFunc={expenseFunc} isShowButtonHandler={isShowButtonHandler} />
			) : (
				<Button onClick={isShowButtonHandler}>
					Добавить новый расход
				</Button>
			)}
		</div>
	)
}
export default NewExpense
