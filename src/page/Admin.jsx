import React from 'react'

import Header from '../components/statics/Header'
import Main from '../components/Main'
import Footer from '../components/statics/Footer'

import ProductList from '../components/ProductList'

import '../components/styles.css'
import loadingImg from '../assets/loading.gif'

import { useAuth } from '../context/AuthContext'

const Admin = ({products, cart, delCart, addToCart, supToCart, loading}) => {

	const { login } = useAuth()

	let descPage = "admin page"

	return (
			<>
				<Header cart={cart} addToCart={addToCart} delCart={delCart} />
				<Main titlePage="Administrador" descPage={descPage} page="admin" />
				<Footer />
			</>
			)		
}

export default Admin