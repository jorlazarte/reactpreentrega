import React from 'react'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {

	const [photo, setPhoto] = useState([])

	useEffect(() => {
	    
	    //setProducts( getProducts() )
    	
		const url = 'https://681d077ff74de1d219ae980b.mockapi.io/proycurso2025/photo/2';

    	fetch(url)
      		.then((response) => {
        			return response.json()
      		})
      		.then((data) => {
        			setPhoto(data)
      		})
      		.catch(error => console.log(error))
      	
      	}, [])

	return (
			<>
				<div>
					ItemDetailContainer 
					<div>{photo.name}</div>
					<div><img src={photo.avatar} /></div>
				</div>
			</>
			)		
}

export default ItemDetailContainer