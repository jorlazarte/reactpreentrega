import React from 'react'

import Header from '../components/statics/Header'
import Footer from '../components/statics/Footer'

import Main from '../components/Main'

import '../components/styles.css'


const Ejemplo = ( {products, cart, delCart, addToCart, supToCart, loading, handleNameChange} ) => {

	const descPage = 	"Imagenes de referencia. Promoción válida en la República Argentina"+
						"en productos seleccionados de acuerdo a disponibilidad y condiciones"+ 
						"establecidas en cada publicación a cargo de cada usuario vendedor."+
						"Envíos gratis en productos seleccionados."

	return (
			<>
				<Header cart={cart} delCart={delCart} addToCart={addToCart} />
				<Main titlePage="Ejemplo nro1" descPage={descPage} />
				<Footer />
			</>
			)		
}

export default Ejemplo