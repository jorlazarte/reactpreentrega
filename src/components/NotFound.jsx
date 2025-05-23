import React, {useEffect, useState} from 'react';

import { useAuth } from '../context/AuthContext';

import {useNavigate} from 'react-router-dom';

const NotFound = () => {

	const { logout, login, setUser } = useAuth()
	
	const [segundos, setSegundos] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		const intervalo = setInterval(() => {
			setSegundos(prev => prev - 1);
		}, 1000);

		const timeout = setTimeout(() => {
			navigate('/'); // Cambia la ruta según tu aplicación
		}, 5000);

		return () => {
			clearInterval(intervalo);
			clearTimeout(timeout);
		}
	}, [navigate]);

	return (
			<>
				<div >Redirigiendo en {segundos} segundos...</div>
			</>
			)		
}

export default NotFound