import React from 'react';
function Changepassword() {
    return ( 
        <div class="container-container-fluid">
		<div class="row wrapper">
                <div class="col-10 col-lg-5">
                    <form class="shadow-lg">
                        <h1 class="mt-2 mb-5">Update Password</h1>
                        <div class="form-group">
                            <label for="old_password_field">Old Password</label>
                            <input
                                type="password"
                                id="old_password_field"
                                class="form-control"
                                value=''
                            />
                        </div>

                        <div class="form-group">
                            <label for="new_password_field">New Password</label>
                            <input
                                type="password"
                                id="new_password_field"
                                class="form-control"
                                value=''
                            />
                        </div>

                        <button type="submit" class="btn update-btn btn-block mt-4 mb-3">Update Password</button>
                    </form>
                </div>
            </div>
        
    </div>
     );
}

export default Changepassword;