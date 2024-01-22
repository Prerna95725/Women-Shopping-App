import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import img4 from './images/kc1.png'


function Navbar(props){


	return(    
		<div>
		<div class="collapse" id="navbarToggleExternalContent">

</div>
<nav class="navbar navbar-dark bg-dark"> 
  <div class="container-fluid">
   <p class="nav justify-content-start text-white cursor-pointer" onClick={() => props.handleShow(false)}>
    	Women's Shopping App
    </p>

    <p class="nav justify-content-center ">
    	<img className="logo" src={img4} alt=""/>
    </p>
    
    <p class="nav justify-content-end text-white cursor-pointer" onClick={() => props.handleShow(true)}>Cart<sub>{props.count}</sub></p>
  </div>

</nav>

		</div>
		)
}

export default Navbar