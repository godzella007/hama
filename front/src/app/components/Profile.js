import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
<>
<div className="row gutters-sm">
  <div className="col-md-4 mb-3">
    <div className="card">
      <div className="card-body">
        <div className="d-flex flex-column align-items-center text-center">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />

          <div className="mt-3">
            <h4><strong>{currentUser.username}</strong></h4>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Tunisia</p>
            <h3>Language</h3>
          <hr/>
  <small>Arabic</small>
  <div className="progress mb-3" style={{ height: '5px' }}>
    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '100%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <small>France</small>
  <div className="progress mb-3" style={{ height:'5px' }}>
    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <small>English</small>
  <div className="progress mb-3" style={{ height: '5px' }}>
    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
   
    </div>
  </div></div>    </div>
        </div>
      
     
  <div className="col-md-8">
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <strong>{currentUser.username}</strong>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>  Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <strong>{currentUser.email}</strong>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Authorities:</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </ul>
          </div>
        </div>
        <hr />
        
        <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      
                      <div className="d-flex justify-content-between">
                        <small className="text-muted"></small>
                        <small className="text-muted">60%</small>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <small className="text-muted">Errors</small>
                        <small className="text-muted">30%</small>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <small className="text-muted">Success</small>
                        <small className="text-muted">90%</small>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    
                     
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</>
   
  );
};

                                   
export default Profile;
