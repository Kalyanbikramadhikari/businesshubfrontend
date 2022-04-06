import React from "react";
//<main class="container"></main>

function Product(){
    return(
        <><><div classname="left column">
            <img data-imgae="black" src=""></img>
            <img data-imgae="blue" src=""></img>
            <img data-imgae="red" class="active" src=""></img>
        </div>
        <div classname="right column">
            <div classname="product description">
                <span>Headphones</span>
                <h1>Beats</h1>
                <p>Sturdy headband and on-ear cushions suitable for live performance</p>
        </div>
        </div></>
        <div class="product configuration">
            <div class = "product colour">
                <span>Colour</span> 
                <div classname ="colour choose"></div>
                <div>
                        <input data-image ="red" type ="radio" id= "red" name ="colour" value ="red" checked></input>
                        <label for= "red"><span></span></label>
                    </div>
                    <div>
                        <input data-image ="blue" type ="radio" id= "blue" name ="colour" value ="blue" checked></input>
                        <label for= "blue"><span></span></label>
                    </div>
                    <div>
                        <input data-image ="black" type ="radio" id= "black" name ="colour" value ="black" checked></input>
                        <label for= "black"><span></span></label>
                    </div>
                    <div class = "cable-config">
                        <span>Cable configuration</span>
                        <div class ="cable choose">
                            <button>straight</button>
                            <button>coiled</button>
                            <button>long coiled</button>
                            </div>
                    <div classname= "product-price">
                        <span>Rs. 5000</span>
                        <a href ="" classname = "cart-btn">Add to cart</a>
                    </div>
                    </div>
                </div>
                </div></>
    )
    
}
export default Product;