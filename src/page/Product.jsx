import React from 'react'

import Header from '../components/statics/Header'
import Navbar from '../components/statics/Navbar'
import Footer from '../components/statics/Footer'

import ProductDetail from '../components/ProductDetail'

import loadingImg from '../assets/loading.gif'

const Product = ( {products, loading, cart, addToCart, supToCart} ) => {
	//console.log('ProductPage',  products)
	return (
			<>
				<Header />
				<Navbar cart={cart} addToCart={addToCart} />
				<main>
					{
						loading ? 
									<img src={loadingImg} alt="loading" />
								:
									<ProductDetail products={products} />
					}
				</main>
				<Footer />
			</>
			)		
}

export default Product