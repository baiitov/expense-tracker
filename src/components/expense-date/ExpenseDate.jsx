import React from 'react'
import './ExpenseDate.css'
const ExpenseDate = ({ date }) => {
	const month = date.toLocaleString('ru-RU', { month: 'long' })
	const day = date.toLocaleString('ru-RU', { day: '2-digit' })
	const year = date.getFullYear()

	return (
		<div className='date'>
			<div className='month'>{month}</div>
			<div className='day'>{day}</div>
			<div className='year'>{year}</div>
		</div>
	)
}

export default ExpenseDate
