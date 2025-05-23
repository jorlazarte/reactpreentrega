import { useState, useEffect } from 'react'

import ItemList from './ItemList'

const ItemListContainer = () => {

	const [photoList, setPhotoList] = useState([])

	useEffect(() => {
	    
	    //setProducts( getProducts() )
    	
		const url = 'https://681d077ff74de1d219ae980b.mockapi.io/proycurso2025/photo';

    	fetch(url)
      		.then((response) => {
        			return response.json()
      		})
      		.then((data) => {
        			setPhotoList(data)
      		})
      		.catch(error => console.log(error))
      	
      	}, [])

	return (
			<div className="main-container">
				<ItemList photoList={photoList} />
			</div>
			)		
}

export default ItemListContainer