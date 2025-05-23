import React from 'react'

import Header from '../components/statics/Header'
import Main from '../components/Main'
import Footer from '../components/statics/Footer'

const Contact = ( {products, cart, delCart, addToCart, supToCart, loading, handleNameChange} ) => {
	
	let descPage = 'Contactenos por favor'
	return (
			<>
				<Header cart={cart} addToCart={addToCart} delCart={delCart} />
				<Main titlePage="Contactenos" descPage={descPage} page="contact" />
				<Footer />
			</>
			)		
}

export default Contact