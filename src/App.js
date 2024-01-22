import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import WomenItemCard from './WomenItemCard'
import Navbar from './Navbar'
import {useState} from 'react'
import Cart from './Cart'



function App() {
    const [cart,setCart]=useState([])
    const [showproduct,setShowProduct]=useState(false)
 console.log(cart)
  const addToCart=(data)=>{
   
    setCart([...cart,{...data, quantity:1}])
}

const handleShow=(value)=>{
  setShowProduct(value)

}
 
  return (
    <>
    <Navbar count={cart.length} handleShow={handleShow}/>
    {
      showproduct?<Cart cart={cart}/>: <WomenItemCard addToCart={addToCart}/>
    }
    
   

    <routes>
    <route path="/home" component={ Home }/>
    </routes>


   

    
    </>
  );
}

export default App;
