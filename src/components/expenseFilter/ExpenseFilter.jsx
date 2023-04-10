import React from 'react'
import './ExpenseFilter.css'
const ExpenseFilter = ({ onselecChange, selectedYear }) => {
	return (
		<div className='filter'>
			<div className='filter-control'>
				<label className='filter-label'> Filter by year</label>
				<select className='filter-select' value={selectedYear} onChange={onselecChange}>
					<option value='ALL'>Select All</option>
					<option value='2025'>2025</option>
					<option value='2024'>2024</option>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
				</select>
			</div>
		</div>
	)
}

export default ExpenseFilter
