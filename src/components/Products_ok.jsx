import React from 'react'

const Products = ({products}) => {

	return (
			<>
			<div className="productList">
				{
					
				products.map( (item) => (
					<div className="productCard" key={item.id}>
					  <div className="box head1"></div>
					  <div className="box head2">B</div>
					  
					  <div className="boxImg img">
					  	<img src={item.image} className="itemImg" />
					  </div>

					  <div className="box desc">q</div>
					  <div className="box price">e</div>
					</div>

				) )
				
				}
			</div>
			</>
			)		
}

export default Products