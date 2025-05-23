import React from 'react'

import { useAuth } from '../context/AuthContext';

const Login = () => {

	const { logout, login, setUser, loading } = useAuth()
	
	const descPage = 	"Ingrese usuario y contraseña para ingresar"

	return (
			<>
				<div className="contLogin">
						<div className="itemImg"></div>
						<div className="item">Usuario:</div>
						<div className="item"><input type="text" onChange={(e) => setUser(e.target.value)} /></div>
						<div className="item">Password:</div>
						<div className="item"><input type="text" /></div>
						<div className="item">
							
							{loading ? <p>Cargando...</p> : <button onClick={login}>Login</button>}
						</div>
				</div>
			</>
			)		
}

export default Login