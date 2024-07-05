import { Route, Routes } from 'react-router-dom'
import Api from './Api'
import './App.css'
import Getting from './Getting'
import Setting from './Setting'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Setting />} />
				<Route path='/getting' element={<Getting />} />
				<Route path='/api' element={<Api />} />
			</Routes>
		</>
	)
}

export default App
