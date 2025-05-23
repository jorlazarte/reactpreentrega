/*
import Header from './components/statics/Header'
import Navbar from './components/statics/Navbar'
import Footer from './components/statics/Footer'

import Main from './components/Main'
*/

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './page/Home'
import Products from './page/Products'
import Product from './page/Product'
import Contact from './page/Contact'
import About from './page/About'
import Notfound from './page/Notfound'
import Ejemplo from './page/Ejemplo'

import Login from './page/Login'
import Admin from './page/Admin'

import ProtectedRoutes from './auth/ProtectedRoutes'

import { useAuth } from './context/AuthContext';

function App() {

  const [ cart, SetCart ] = useState([])          //los productos que se cargaron al carrito
  const [ products, SetProducts ] = useState([])  //los productos
  const [ productsOriginal, SetProductsOriginal ] = useState([])  //los productos
  const [ loading, SetLoading ] = useState(true)  //cuando está cargando los datos
  const [ error, SetError ] = useState(false)     //cuando existe un error en la carga

  const [ isAuth, setIsAuth] = useState(false)

  const { isAuthenticated } = useAuth()

  /************************cargo los datos de la api************************/
  useEffect(() => {
      
      //setProducts( getProducts() )

      const url = 'https://681d077ff74de1d219ae980b.mockapi.io/proycurso2025/photo';

      fetch(url)
          .then((response) => {
              return response.json()
          })
          .then((data) => {
            //dos segundos de retraso
            setTimeout( () => {
              SetProducts(data)
              SetProductsOriginal(data)
              SetLoading(false)
            }, 2000)
            
          })
          .catch(error => {
            console.log('Error', error)
            SetLoading(false)
            SetError(true)
          })
        
  }, [])
  /*********************fin cargo los datos de la api************************/

  //console.log('products', products)

  const addToCart = (newItem) => {
    console.log('cart antes de agregar un producto', cart)
    console.log('producto nuevo', newItem)
    if (!cart.find( (item) => item.id === newItem.id)) {
      console.log('111111')
      SetCart([...cart, {...newItem, qty: 1} ]);
      console.log('producto nuevo'. cart)
    
    } else {
      console.log('22222222')
      //el producto ya existe
      console.log("Item already exists in the array." + newItem.id );

      SetCart( 
                cart.map( 
                          (item) => item.id === newItem.id ? {...item, qty: item.qty + 1} : item
                        ) 
             )
      
    }
  };

  const supToCart = (itemToSup) => {
      let items = []

      SetCart( 
                cart.map( 
                          (item) => {
                            if(item.id === itemToSup.id){
                                if(item.qty === 1){
                                    //console.log( cart.filter(item => item.id != itemToSup.id) )
                                    return cart.filter(item => item.id != itemToSup.id)
                                }else
                                    return {...item, qty: item.qty - 1}
                                
                            }
                            else
                              return item
                          }
                        ) 
             )
  }

  const delCart = () => {
    console.log()
    SetCart([])
  }

  const handleNameChange = (e) => {
    console.log('products111', productsOriginal)
    SetProducts( productsOriginal )
    console.log('----products', products)
    const filteredData = productsOriginal.filter(
                                          (item) => item.name.toLowerCase().includes( e.target.value.toLowerCase() )
                                        )

    console.log('productos222', filteredData)
    console.log( '_productsOriginal_', productsOriginal )
    SetProducts( filteredData )
  }

  //console.log('products', products)
  //console.log('productsOriginal', productsOriginal)
  console.log('cart dentro de app', cart)
  return (
    <>

        <Routes>
          <Route path="/" 
                          element={
                                    <Home 
                                        products={products} 
                                        loading={loading} 
                                        cart={cart}
                                        delCart={delCart}
                                        addToCart={addToCart}
                                        supToCart={supToCart}

                                        handleNameChange={handleNameChange}
                                  />} 
          />
          <Route  path="/products" element={<Products />} />
          <Route  path="/ejemplo" element={
                                            <Ejemplo  products={products} 
                                                      loading={loading} 
                                                      cart={cart}
                                                      delCart={delCart}
                                                      addToCart={addToCart}
                                                      supToCart={supToCart} />} 
          />
          
          <Route  path="/products/:id" 
                  element={
                            <Product  products={products} 
                                      loading={loading} 
                                      cart={cart}
                                      delCart={delCart}
                                      addToCart={addToCart}
                                      supToCart={supToCart} />} 
          />

          <Route path="/contact" element={
                            <Contact  products={products} 
                                      loading={loading} 
                                      cart={cart}
                                      delCart={delCart}
                                      addToCart={addToCart}
                                      supToCart={supToCart} />} 
          />
                                
          <Route path="/about" element={
                            <About  products={products} 
                                      loading={loading} 
                                      cart={cart}
                                      delCart={delCart}
                                      addToCart={addToCart}
                                      supToCart={supToCart} />} 
          />

          <Route path="/admin" element={<ProtectedRoutes isAuth={isAuthenticated}> <Admin cart={cart} /> </ProtectedRoutes>} />
          <Route path="/login" element={
                                        <Login 
                                              products={products} 
                                              loading={loading} 
                                              cart={cart}
                                              delCart={delCart}
                                              addToCart={addToCart}
                                              supToCart={supToCart}
                                        />

                                      } />

          <Route path="/*" element={<Notfound cart={cart} addToCart={addToCart} delCart={delCart} />} />
        </Routes>

    </>
  )
}

export default App
