import React from 'react'
import list from './list'
import {useState} from 'react'
import Cart from './Cart'


 function WomenItemCard({addToCart}){
 	
 	return(
 		<>
 		
 		<h1 className="text-center mt-3"> All Item's for Women</h1>

 		<section className="py-4 container">
<div className="row justify-content-center">
 		{
 			list.map((item,index)=>
 				<>
 				<div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
<div class="card p-0 overflow-hidden h-100 shadow">
<img src={item.img} class="card-img-top img-size" />
<div class="card-body text-center">
<h5 class="card-title">{item.title}</h5>
<p class="card-text">Rs. {item.price}</p>
<button href="#" class="btn btn-primary" onClick={()=>addToCart(item)}>Add Cart</button>
</div>
</div>

		</div>
 				</>)
 		}
 		</div>
 		</section>
 		</>
 		)

 }
 export default WomenItemCard