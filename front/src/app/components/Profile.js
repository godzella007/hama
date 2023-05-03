import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
<><div className="content-body">

<div class="row">
<div class="col-lg-12">
    <div class="profile card card-body px-3 pt-3 pb-0">
        <div class="profile-head">
            <div class="photo-content">
                <div class="cover-photo rounded"></div>
            </div>
            <div class="profile-info">
<div class="profile-photo">
<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
</div>
<div class="profile-details">
<div class="profile-name px-3 pt-2">
  <h4 class="text-primary mb-0">{currentUser.username}</h4>
  <p>Full Name</p>
</div>
<div class="profile-email px-2 pt-2">
  <h4 class="text-muted mb-0">{currentUser.email}</h4>
  <p>Email</p>
</div>
<div class="profile-name px-3 pt-2">
  <h4 class="text-primary mb-0"> <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </ul></h4>
  <p>Authorities:</p>
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
