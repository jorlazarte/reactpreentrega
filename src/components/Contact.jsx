import React from 'react'

import { useAuth } from '../context/AuthContext';

const Contact = () => {

	const { logout, login, setUser } = useAuth()
	
	const descPage = 	"Ingrese usuario y contraseña para ingresar"

	return (
			<>
					<div >
						formulario de contactenos
						
					</div>
			</>
			)		
}

export default Contact