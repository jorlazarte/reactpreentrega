import React from 'react'

import Header from '../components/statics/Header'
import Main from '../components/Main'
import Footer from '../components/statics/Footer'

import ProductList from '../components/ProductList'

import '../components/styles.css'


const Home = ({products, cart, delCart, addToCart, supToCart, loading, handleNameChange}) => {
	
	let descPage = "Bienvenidos a la homezz"

	return (
			<>
				<Header cart={cart} delCart={delCart} addToCart={addToCart} />
				{
				<Main 
						 titlePage="Bienvenido" 
						 descPage={descPage} 
						 page="productList" 

						 products={products} cart={cart} addToCart={addToCart} supToCart={supToCart} loading={loading} handleNameChange={handleNameChange}
				/>
				}
				{/*<Navbar cart={cart} addToCart={addToCart} />*/}
				{/*
				<main>
					
					<ProductList products={products} cart={cart} addToCart={addToCart} supToCart={supToCart} loading={loading} handleNameChange={handleNameChange} />
					
				</main>
				*/}

				<Footer />
			</>
			)		
}

export default Home