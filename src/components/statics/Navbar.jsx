import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import Cart from '../Cart'

import './styles.css'

const Navbar = ({cart}) => {
	const [cartOpen, SetCartOpen] = useState(false)

	return (
			<>
				<div>
					<ul className="nav">
						<li><Link to="/">Inicio</Link></li>
						<li><Link to="/about">Nosotros</Link></li>
						<li><Link to="/products">Galeria de Productos</Link></li>
						<li><Link to="/contact">Contacto</Link></li>						
						<li><Link to="/admin">Admin</Link></li>

						<li className="itemRight">
							<button onClick={ () => SetCartOpen(true) }>Carrito de compras</button>							
						</li>
					</ul>

					<Cart cart={cart} isOpen={cartOpen} onClose={ () => SetCartOpen(false) } />
				</div>

			</>
			)		
}

export default Navbar