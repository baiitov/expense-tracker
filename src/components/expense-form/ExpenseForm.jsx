import React, { useState } from 'react'
import Button from '../../UI/button/Button'
import InputForm from '../../UI/inputform/InputForm'

const ExpenseForm = (props) => {
	let [title, setTitle] = useState('')
	let [date, setDate] = useState('')
	let [price, setPrice] = useState(0)

	const buttonClickHandler = (event) => {
		event.preventDefault()
		props.onAddnewButtonHandler()
	}
	const titleHandler = (event) => {
		setTitle(event.target.value)
	}
	const dateHandler = (event) => {
		setDate(event.target.value)
	}
	const priceHandler = (event) => {
		setPrice(event.target.value)
	}
	const onSubmitHandler = (event) => {
		event.preventDefault()
		let data = {
			title,
			date,
			price,
		}
        props.ondata(data)
	}

	return (
		<form>
			<InputForm
				onChange={titleHandler}
				value={title}
				labelName='Заголовок'
				type='text'
				id='name1'
			/>
			<InputForm
				onChange={priceHandler}
				labelName='Количество'
				type='text'
				id='name2'
			/>
			<InputForm
				onChange={dateHandler}
				labelName='Датировать'
				type='date'
				id='name3'
			/>

			<Button type='submit' onClick={buttonClickHandler}  >Отмена</Button>
			<Button onClick={onSubmitHandler}  >Добавить расходы	</Button>
		</form>
	)
}

export default ExpenseForm
