import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const EditProfile  = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
   <div className="content-body">

        <div className="row">
        <div class="col-xl-9 col-lg-8">
						<div class="card profile-card card-bx m-b30">
							<div class="card-header">
								<h6 class="title">Account setup</h6>
							</div>
							<form class="profile-form">
								<div class="card-body">
									<div class="row">
										<div class="col-sm-6 m-b30">
											<label class="form-label">Name</label>
											<input type="text" class="form-control" value={currentUser.username}/>
										</div>
										<div class="col-sm-6 m-b30">
											<label class="form-label">Surname</label>
                      <select class="default-select form-control" id="validationCustom05" value={currentUser.roles }>
												<option  data-display="Select">Please select</option>
												<option value="html">Particpant</option>
												<option value="css">Entriprise</option>
												<option value="javascript">Admin</option>
											</select>
										</div>
										<div class="col-sm-6 m-b30">
											<label class="form-label">Email address</label>
											<input type="text" class="form-control" value={currentUser.email} />
										</div>
									</div>
								</div>
								<div class="card-footer">
									<button class="btn btn-primary">UPDATE</button>
									<a href="page-register.html" class="btn-link">Forgot your password?</a>
								</div>
							</form>
						</div>
					</div>
        </div>
      </div>
  
  
    </>
  )
}

export default EditProfile
