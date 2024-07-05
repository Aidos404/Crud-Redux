const url =
	'https://real-time-amazon-data.p.rapidapi.com/seller-products?seller_id=A02211013Q5HP3OMSZC7W&country=US&page=1'
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6d85fa7469mshb9458a41da92348p1828d6jsn2a32bb433af9',
		'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
	},
}

const response = await fetch(url, options)
const result = await response.json()

console.log(result)

function Api() {
	return (
		<div>
			{result.map((item, index) => (
				<div key={index}>
					<ul>
						<li>{item.data.seller_products.product_title}</li>
					</ul>
				</div>
			))}
		</div>
	)
}

export default Api
