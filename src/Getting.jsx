import { useSelector } from 'react-redux'

function Getting() {
	const names = useSelector((state) => state.crud)
	return (
		<div>
			<h1>get elements</h1>
			<ul>
				{names.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default Getting
