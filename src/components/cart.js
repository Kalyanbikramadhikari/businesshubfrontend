import React , {useState} from 'react';

function Hookcounter() {
    const [count, setCount] = useState(0) // using count an attribute and setcount a function inside of the big bracket is called array destructuring.
    
    const cou = 0
    
   
    return ( 
        <div>
                <div class="container container-fluid">
            <h2 class="mt-5">Your Cart: <b>1 items</b></h2>
            
            <div class="row d-flex justify-content-between">
                <div class="col-12 col-lg-8">
                    <hr />
                    <div class="cart-item">
                        <div class="row">
                            <div class="col-4 col-lg-3">
                                </div>

                            <div class="col-5 col-lg-3">
                                <a href="#">HP 15-CX0056WM Laptop, 15.6" FHD</a>
                            </div>


                            <div class="col-4 col-lg-2 mt-4 mt-lg-0">
                                <p id="card_item_price">$499.00 </p>
                            </div>
                            
            
                   

                            <div class="col-4 col-lg-3 mt-4 mt-lg-0">
                                <div class="stockCounter d-inline">
                                
                                <button class="btn btn-danger minus" onClick = {() => setCount(count - 1)}>-</button>
                                    
                                    
                                    <span class="form-control count d-inline" value="1" readOnly >{count}</span>

                                    <button class="btn btn-primary plus" onClick = {()=>setCount(count + 1)}>+</button>
                                </div>
                            </div>

                            <div class="col-4 col-lg-1 mt-4 mt-lg-0">
                                <i id="delete_cart_item" class="fa fa-trash btn btn-danger"></i>
                            </div>

                        </div>
                    </div>
                    <hr />
                </div>

                <div class="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Subtotal:  <span class="order-summary-values">3 (Units)</span></p>
                        <p>Est. total: <span class="order-summary-values">$765.56</span></p>
        
                        <hr />
                        <button id="checkout_btn" class="btn btn-primary btn-block">Check out</button>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
     );
}

export default Hookcounter;
