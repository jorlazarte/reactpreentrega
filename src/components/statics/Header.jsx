import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Cart from '../Cart'

import { useAuth } from '../../context/AuthContext';

import '../styles.css'

const Header = ({cart, delCart}) => {
	const [cartOpen, SetCartOpen] = useState(false)

	const { isAuthenticated, logout, user } = useAuth()
	
	console.log('cart', cart)

	return (
			<header>
				<div className="headerUser">
			      {isAuthenticated ? (
			        <>
			        <div>Hola <label className="userName">{user}</label>!</div>
			        <Link onClick={logout}><i className="fas fa-sign-out headUserIcon"></i></Link>
			        </>
			      ) : (
			      	<>
			        <Link to="/login">Login</Link>
			        <i className="fa-regular fa-user headUserIcon"></i>
			        </>
			      )}
				</div>
				<div className="header">
				  <div className="logo">
				    Company Title
				  </div>
				  <div className="menu">
				  	<Link to="/" className="link">
				      <div className="titleHead">Home</div>
				      <div className="bar"></div>
			    	</Link>
				  	<Link to="/ejemplo" className="link">
				      <div className="titleHead">Ejemplo</div>
				      <div className="bar"></div>
			    	</Link>
				  	<Link to="/about" className="link">
				      <div className="titleHead">Nosotros</div>
				      <div className="bar"></div>
			    	</Link>
				  	<Link to="/contact" className="link">
				      <div className="titleHead">Contacto</div>
				      <div className="bar"></div>
			    	</Link>
			    	{isAuthenticated ? (
				  	<Link to="/admin" className="link">
				      <div className="titleHead">Admin</div>
				      <div className="bar"></div>
			    	</Link>
			    	) : (
				  	<Link to="/login" className="link">
				      <div className="titleHead">Login</div>
				      <div className="bar"></div>
			    	</Link>			    	
			    	)}
				    <div className="link">
				      <div className="titleHead" onClick={ () => SetCartOpen(true) }>Carrito ({cart.length})</div>
				      <div className="bar"></div>
				    </div>
				  </div>
				</div>
				<Cart cart={cart} delCart={delCart} isOpen={cartOpen} onClose={ () => SetCartOpen(false) } />
				 

			</header>
			)		
}

	
export default Header