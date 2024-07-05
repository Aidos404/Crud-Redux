import { configureStore } from '@reduxjs/toolkit'
import CRUD from '../CRUD'
export const store = configureStore({
	reducer: {
		crud: CRUD,
	},
})
