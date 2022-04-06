import React from 'react';
function Errorpage() {
    return ( 
        <div class="container my-5">
            <div class="jumbotron">
                <h1 class="display-4">Page Not Found!</h1>
                <p class="lead">This page does not exist or cannot be found at this moment.</p>
                
                <a class="btn btn-primary btn-lg" href="/" role="button">Go To Home</a>
            </div>
        </div>
     );
}

export default Errorpage;