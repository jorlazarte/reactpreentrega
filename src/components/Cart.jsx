import React from 'react'
import './Cart.css'

const Cart = ({cart, delCart, isOpen, onClose}) => {
	console.log('cart', cart)


	return (
			<div className={`cart-cont ${isOpen ? 'cart-open' : ''}`}>
				<div className="cart-header">
					<h2>Carrito de compras</h2>
					<button onClick={onClose}>Cerrar</button>
				</div>
			  <div className="list">
			  	{
					
				cart.map( (item) => (
					<div className="itemCart" key={item.id}>
						<div>{item.name}</div>
						<div>{item.qty}</div>
					</div>
				) )
				
				}

				<div>
					Vaciar Carrito
					<button onClick={delCart}>Eliminar</button>
				</div>
			  </div>
			</div>
			)		
}

export default Cart