
import React  from 'react';
import { useCarrito } from './CarritoContext';

const Cart2 = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
	}) => {

	const { actualizarCarrito} = useCarrito();

	const onDeleteProduct = product => {

		const results = allProducts.filter(
			item => item.orden !== product.orden
		);
	
		
		setTotal(total - product.price );
		setCountProducts(countProducts-1);
		setAllProducts(results);
		quitarAlCarrito (countProducts-1);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
		quitarcontador(countProducts);
	};
	const quitarAlCarrito = (countProducts) =>{
        

          actualizarCarrito(countProducts);
        };
	const quitarcontador = (countProducts) =>{
		

			actualizarCarrito(0);
		};
      

	return (
<>
		<div class="container bg-dark" style={{color:'white',padding:'1rem'}}>
				<h6>Cantidad de productos: {countProducts}</h6>

		</div>
			
			<div  class="container bg-light">
				<div>
					{allProducts.length ? (
						<>
						<div className='row-product'>
									{allProducts.map(product => (
										<div className='card' key={product.orden}>
											<div className='row m-3'>
												<p className='col-8'>
													{product.title}
												</p>
												<div className='col-1'>
													<h5>${product.price}</h5>
												</div>
												<div className='col-1'>
												</div>
												<div className='col-2'>
													<button style= {{backgroundColor:'#333'}} className='btn btn-danger'
														onClick={() => onDeleteProduct(product)}
														
													>
														delete product
													</button>
												</div>
											</div>
											
											
										</div>
									))}
								</div>

							<div className='container' style={{margin:'2rem'}}>
								<h3>Total: ${total}</h3>
								
							</div>
							<div className='container '>	
								<div className='row'>
									<div className='col-8 d-flex justify-content-start'>
										<button  className='btn btn-success' style={{ backgroundColor:'rgb(237, 121, 229)',marginBottom:'1rem',paddingLeft:'2rem',paddingRight:'2rem'}} >
											Pagar
										</button>

									</div>

									<div className='col-4 d-flex justify-content-end'>
										<button className='btn btn-danger' style={{marginBottom:'1rem'}}onClick={onCleanCart}>
											Vaciar Carrito
										</button>

									</div>
								</div>
								
								
							</div>
						</>
					) : (
						<div className='container d-flex justify-content-center' style={{padding:'8rem'}}>
						
							<h5 className='cart-empty'>El carrito está vacío todavia</h5>
						</div>
					)}
				</div>
			</div>
</>
	);
};
export default Cart2;