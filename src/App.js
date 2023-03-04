import './App.css'
import { useState } from 'react'
import { Expenses } from './components/expenses/Expenses'
import { NewExpense } from './components/new-expenses/NewExpense'

function App() {
	const [expense, setExpense] = useState([
		{
			date: new Date('2022-03-25'),
			title: ' a4 Туалетная бумага',
			price: '300 сом ',
		},
		{
			date: new Date('2022-03-25'),
			title: 'Телефон',
			price: '9300 сом ',
		},
	])
	const dataExpenseHandler = (data) => {
		const updatedExpense = [...expense]
		updatedExpense.push(data)
		setExpense(updatedExpense)
	}
	return (
		<div className='App'>
			<NewExpense ondataHandler={dataExpenseHandler} />
			<Expenses data={expense} />
		</div>
	)
}

export default App

// React
// components
// 1. function
// 2. return jsx
// 3. aty chon tamga menen bashtalysh kerek
// 4. bir container baaryn orop turush kerek
// SPA single page application
// reactive(state, VDom)
// declarative
