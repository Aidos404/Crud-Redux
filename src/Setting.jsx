import React, { useState } from 'react' // Added React import
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setname } from './CRUD' // Corrected import to setName (assuming it's a function)

function Setting() {
	const [name, setName] = useState('') // Changed Setname to setName for useState
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const settingName = (e) => {
		setName(e.target.value) // Corrected function name to setName
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (name.trim() == '') {
			// Check if name is not empty or only whitespace
			alert('Please enter your name.')
		} else {
			// Optionally, you can show an alert or handle empty input case
			dispatch(setname(name)) // Corrected function name to setName
			setName('') // Clear input after submit if needed
		}
	}
	return (
		<div>
			<button onClick={() => navigate('/getting')}>Navigate to Getting</button>
			<h1>This is CRUD operation using Redux-Toolkit</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Your name: </label>{' '}
				{/* Added id 'name' for label */}
				<input
					type='text'
					id='name' // Added id 'name' to match htmlFor
					placeholder='Enter your name'
					value={name}
					onChange={settingName}
				/>
				<button type='submit'>Submit and send to Getting</button>{' '}
				{/* Corrected button text */}
			</form>
		</div>
	)
}

export default Setting
