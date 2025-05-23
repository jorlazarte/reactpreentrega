import React from 'react'

import Header from '../components/statics/Header'
import Main from '../components/Main'
import Footer from '../components/statics/Footer'

import '../components/styles.css'
import loadingImg from '../assets/loading.gif'

import { useAuth } from '../context/AuthContext';

const About = ({products, cart, delCart, addToCart, supToCart, loading}) => {

	const { logout, login, setUser } = useAuth()
	
	const descPage = "About descripcion"

	return (
			<>
				<Header cart={cart} addToCart={addToCart} delCart={delCart} />
				<Main titlePage="Acerca de nosotros" descPage={descPage} page="about" />
				<Footer />
			</>
			)		
}

export default About
