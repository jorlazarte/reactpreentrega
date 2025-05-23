import React from 'react'

const ItemList = ( {photoList} ) => {
	return (
			<div className="itemList">
				{
				photoList.map( (item) => (
					<div className="item" key={item.id}>
						  <img src="" alt="Avatar" className="itemImg" />
						  <div className="des">
						    <h4><b>{item.name}</b></h4>
						    <p><b>Descripci&oacute;n:</b>&nbsp;{item.description}</p>
						    <p><b>Precio:</b>&nbsp;{item.price}</p>
						  </div>
					</div>
				) )
				}
			</div>
			)		
}

export default ItemList