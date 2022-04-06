import React, { useEffect } from 'react';
import MetaData from './metadata';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../action/productaction';

function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
    return (
        <div className='container container-fluid'>
          <MetaData title={'Buy Best Products Online'}/>
         <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img alt=''
              className="card-img-top mx-auto"
              src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
            />
            <div classNameName="card-body d-flex flex-column">
              <h5 className="card-title">
                <p>128GB Solid Storage Memory card - SanDisk Ultra</p>
              </h5>
              <div className="ratings mt-auto">
                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p className="card-text">$45.67</p>
              <p id="view_btn" className="btn btn-block">View Details</p>
            </div>
          </div>
        </div>

        
        

       

        
       
      </div>
    </section>  
        </div>
      );
}

export default Home;