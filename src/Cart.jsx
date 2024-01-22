import React,{useState, useEffect} from 'react'
import './App.css'; 

function Cart({cart}){

	const [CART,setCART]=useState([])

	useEffect(()=>{
		setCART(cart)
	},[cart])

	const handlerRemove=(indexy)=>{
		const removefilter=CART.filter((cartItem,cartIndex)=> cartIndex!==indexy)
		setCART(removefilter)
	}


	return(
		<div>
		<h3>Shopping Cart</h3>
		<hr/>
		<table className="table ">
		<thead>
		<tr>
		<td >Items</td>
		<td></td>
		<td>Sizes</td>
		<td>Quantity</td>
		<td>Price</td>
		<td>Subtotal</td>
		<td></td>
		</tr>
		</thead>
		{
			CART.map((cartItem,cartIndex)=>
				<>
				<tbody>
				<tr>
				<td><img src={cartItem.img} width={40}/></td>
				<td className="text-info">{cartItem.title}</td>
				<td>
				<form >
  <label for="cars">Choose a size:</label>
  <select name="size" id="size">
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
  </select>
 
</form>
				</td>
			    
				<td>
				<button className="btn btn-primary"
                          onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            &nbsp;
				<span>{cartItem.quantity}</span>
				&nbsp;
				<button className="btn btn-info"
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
				</td>
				<td>Rs. {cartItem.price }</td>
				<td><span> Rs. {cartItem.price * cartItem.quantity} </span></td>
				<td>
					<button className="btn btn-danger" onClick={()=>handlerRemove(cartIndex)}>Remove</button>
				</td>
				</tr>
				</tbody>

				</>
				)
		}
		<tfoot>
		<tr>
		<td></td><td></td><td></td><td></td><td></td>
		<td>
		<p><h6>Total Amount : </h6><span></span><h5>Rs.{
			CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
		}
		</h5>
		</p>
		
		</td>
		<td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Order Place
</button></td>
		</tr>
		</tfoot>
		
		</table>
		

		
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Payment</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Card Number</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">VALID FROM</label>
            <input type="number" class="form-control" id="message-text"></input>
            <label for="message-text" class="col-form-label">VALID END</label>
            <input type="number" class="form-control" id="message-text"></input>
          </div>
          <label for="message-text" class="col-form-label">SubTotal Amount: Rs. <h5>{
			CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
		}
		</h5></label>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">PAY</button>
      </div>
    </div>
  </div>
</div>
		</div>
		)
}

export default Cart