import React from 'react';
function Dashboard() {
    return ( 
        <div class="container container-fluid">
		<div class="row">
                <div class="col-12 col-md-2">
                    <h4>Sidebar</h4>
                </div>

                <div class="col-12 col-md-10">
                    <h1 class="my-4">Dashboard</h1>
                            <div class="row pr-4">
                                <div class="col-xl-12 col-sm-12 mb-3">
                                    <div class="card text-white bg-primary o-hidden h-100">
                                        <div class="card-body">
                                            <div class="text-center card-font-size">Total Amount<br /> <b>$4567</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row pr-4">
                                <div class="col-xl-3 col-sm-6 mb-3">
                                    <div class="card text-white bg-success o-hidden h-100">
                                        <div class="card-body">
                                            <div class="text-center card-font-size">Products<br /> <b>56</b></div>
                                        </div>
                                        <a class="card-footer text-white clearfix small z-1" to="/admin/products">
                                            <span class="float-left">View Details</span>
                                            <span class="float-right">
                                                <i class="fa fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>


                                <div class="col-xl-3 col-sm-6 mb-3">
                                    <div class="card text-white bg-danger o-hidden h-100">
                                        <div class="card-body">
                                            <div class="text-center card-font-size">Orders<br /> <b>125</b></div>
                                        </div>
                                        <a class="card-footer text-white clearfix small z-1" to="/admin/orders">
                                            <span class="float-left">View Details</span>
                                            <span class="float-right">
                                                <i class="fa fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>


                                {/* <div class="col-xl-3 col-sm-6 mb-3">
                                    <div class="card text-white bg-info o-hidden h-100">
                                        <div class="card-body">
                                            <div class="text-center card-font-size">Users<br /> <b>45</b></div>
                                        </div>
                                        <a class="card-footer text-white clearfix small z-1" href="/admin/users">
                                            <span class="float-left">View Details</span>
                                            <span class="float-right">
                                                <i class="fa fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div> */}


                                <div class="col-xl-3 col-sm-6 mb-3">
                                    <div class="card text-white bg-warning o-hidden h-100">
                                        <div class="card-body">
                                            <div class="text-center card-font-size">Out of Stock<br /> <b>4</b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
    </div>
     );
}

export default Dashboard;