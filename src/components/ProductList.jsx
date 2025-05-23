import React from 'react'
import './Products.css'

import {Link} from 'react-router-dom'
import loadingImg from '../assets/loading.gif'

const ProductList = ({products, cart, addToCart, supToCart, loading, handleNameChange}) => {

	console.log('-------------')
	
	const itemQty = (cart, item) => {

		const targetObject = cart.find(object => object.id === item.id)
		console.log('targetObject', targetObject)
		console.log('targetObject', targetObject == undefined)

		return (targetObject == undefined?0:targetObject.qty)
	}
	
	console.log('-------------')

	return (
			<>
			{
			<div className="main-container">
					<div className="filter">

						<div className="contFilter">
							<div className="wrapperFilter">
								<label >Nombre</label>
								<input 
										id="text" 
										type="text"
										
          								onChange={handleNameChange}
								/>
							</div>
						</div>
					</div>
					<div className="list">
					{
					<div className="productList">
						{
						loading ? 
							<img src={loadingImg} alt="loading" />
						:

							products.map( (item) => (
								
								<div className="productCard" key={item.id}>
								  <div className="box head1"></div>
								  <div className="box head2">B</div>
								  
								  <div className="boxImg img">
								  	<img src={item.image} className="itemImg" />
								  </div>

								  <div className="box desc">{item.name}</div>
								  <div className="box price">${item.price}.-</div>
								  <div className="box buttons">
								  	<button onClick={() => supToCart(item) }>-</button>
								  	{ itemQty(cart, item) }
								  	<button onClick={() => addToCart(item) }>+</button>
								  	
								  </div>
								</div>

							) )
						}
					</div>
					}
						
					</div>
			</div>
			}
			</>
			)		
}

export default ProductList