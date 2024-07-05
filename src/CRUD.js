import { createSlice } from '@reduxjs/toolkit'

export const namesSlice = createSlice({
	name: 'crud',
	initialState: [],
	reducers: {
		setname: (state, action) => {
			state.push(action.payload)
		},
	},
})

export const { setname } = namesSlice.actions
export default namesSlice.reducer
