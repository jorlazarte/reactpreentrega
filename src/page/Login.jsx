import React from 'react'

import Header from '../components/statics/Header'
import Main from '../components/Main'
import Footer from '../components/statics/Footer'

import '../components/styles.css'
import loadingImg from '../assets/loading.gif'

import { useAuth } from '../context/AuthContext';

const Login = ({products, cart, delCart, addToCart, supToCart, loading}) => {

	const { logout, login, setUser } = useAuth()
	
	const descPage = "Ingrese usuario y contraseña para ingresar"

	return (
			<>
				<Header cart={cart} addToCart={addToCart} delCart={delCart} />
				<Main titlePage="Bienvenido" descPage={descPage} page="login" />
				<Footer />
			</>
			)		
}

export default Login