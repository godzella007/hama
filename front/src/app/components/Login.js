import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="container">
    <div className="row vh-100 d-flex justify-content-center">
      <div className="col-12 align-self-center">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="card">
              <div className="card-body p-0 auth-header-box">
                <div className="text-center p-3">
                  <a href="index.html" className="logo logo-admin">
                    <img
                      src="4.png"
                      height="50"
                      alt="logo"
                      className="auth-logo"
                    />
                  </a>
                  <h4 className="mt-3 mb-1 fw-semibold text-white font-18">
                    Let's Get Started DevHack
                  </h4>
                 
                </div>
              </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
              <Form className="form-horizontal auth-form" >
              <div className="form-group mb-2">
              
                   <label htmlFor="username">Username</label>
                        <Field
                          name="username"
                          type="text"
                          placeholder="Enter username"
                          className={
                            "form-control" +
                            (errors.username && touched.username ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="invalid-feedback"
                        />
              
              </div>
              <div className="form-group mb-2">
                
                 <label htmlFor="password">Password</label>
                        <Field
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          className={
                            "form-control" +
                            (errors.password && touched.password ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />

              </div>
              <div className="form-group row my-3">
                <div className="col-sm-6">
                  <div className="custom-control custom-switch switch-success">
                
                  </div>
                </div>
                <div className="col-sm-6 text-end">
                <Link to={"/RestPassword"} className="nav-link"> <i className="dripicons-lock"></i> Forgot password?</Link> 
                </div>
                
              </div>
              <div className="form-group mb-0 row">
                <div className="col-12">
                   <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={loading}
                        >
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span>Login</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg> 
                        </button>
                </div>
              </div>
            </Form>
           

          )}
        </Formik>

      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
      
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </div>
   

   
  );
};

export default Login;
