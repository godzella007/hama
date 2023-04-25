import React from "react";
import { Link } from "react-router-dom";
function ResetPassword() {
  return (
    <div className="container">
      <div className="row vh-100 d-flex justify-content-center">
        <div className="col-12 align-self-center">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="card">
                <div className="card-body p-0 auth-header-box">
                  <div className="text-center p-3">
                  <Link to={"/home"} className="nav-link"> 
                      <img
                        src="4.png"
                        height="50"
                        alt="logo"
                        className="auth-logo"
                      />
                    </Link>
                    <h4 className="mt-3 mb-1 fw-semibold text-white font-18">
                      Reset Password For DevHack
                    </h4>
                    <p className="text-muted  mb-0">
                      Enter your Email and instructions will be sent to you!
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <ResetPasswordForm />
                  <p className="text-muted mb-0 mt-3">
                    Remember It ?{" "}
                    <Link to={"/register"} className="nav-link"> 
                      Sign in here
                    </Link>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResetPasswordForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form
      className="form-horizontal auth-form"
      onSubmit={handleSubmit}
      action="https://mannatthemes.com/dastone/default/index.html"
    >
      <div className="form-group mb-2">
        <label className="form-label" htmlFor="username">
          Email
        </label>
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
          />
        </div>
      </div>

      <div className="form-group mb-0 row">
        <div className="col-12 mt-2">
          <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">
            Reset <i className="fas fa-sign-in-alt ms-1"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default ResetPassword;
