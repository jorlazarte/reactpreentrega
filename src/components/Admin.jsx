import React from 'react'

import { useAuth } from '../context/AuthContext';

const Contact = () => {

	const { logout, login, setUser } = useAuth()
	
	return (
			<>
					<div >
						Bienvenido ADMIN
					</div>
			</>
			)		
}

export default Contact