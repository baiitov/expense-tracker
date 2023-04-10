import { useState } from 'react'
import ExpenseFilter from '../expenseFilter/ExpenseFilter'
import ExpenseItem from '../expenseItem/ExpenseItem'
import './Expense.css'
const Expense = ({ expenses }) => {
	const [selectedYear, setSelectedYear] = useState('ALL')
	const selectedOnchangeHandler = (item) => {
		setSelectedYear(item.target.value)
	}
	const getCurrentExpenses = () => {
		if (selectedYear === 'ALL') {
			return expenses
		}
		return expenses.filter((expense) => {
			return expense.date.getFullYear().toString() === selectedYear
		})
	}
	const renderedExpenses = getCurrentExpenses()
	return (
		<div className='expense-container'>
			<ExpenseFilter
				onselecChange={selectedOnchangeHandler}
				selectedYear={selectedYear}
			/>
			{renderedExpenses.map((el) => {
				return (
					<ExpenseItem
						key={el.title}
						title={el.title}
						price={el.price}
						date={el.date}
					/>
				)
			})}
		</div>
	)
}
export default Expense
