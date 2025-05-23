import React from 'react'

import { useParams } from 'react-router-dom'

const ProductDetail = ({products}) => {

	const { id } = useParams( )
	console.log('id', id, products)

	const product = products.find( item => item.id === id )

	return (
			<>
			{
			product ? (		
							<>
							<div>{product.name}</div>
							<div>{product.description}</div>
							</>
						) : (
							<div>Producto no encontrado</div>
						)
			}
			</>
			)		
}

export default ProductDetail