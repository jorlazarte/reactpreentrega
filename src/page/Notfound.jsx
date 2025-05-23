import React from 'react'

import Header from '../components/statics/Header'
import Main from '../components/Main'
import Footer from '../components/statics/Footer'

import {Link} from 'react-router-dom'

const Notfound = ({cart, addToCart}) => {

	let descPage = "no se encontro la pagina"

	return (
			<>
				<Header cart={cart} addToCart={addToCart} />
				<Main titlePage="Not found" descPage={descPage} page="notfound" />
				<Footer />
			</>
			)		
}

export default Notfound