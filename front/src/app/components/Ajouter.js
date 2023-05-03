import React, { useState, useEffect } from "react";

import tutorialService from "../services/tutorial.service";
const Ajouter = () => {
  const [count,setCount] = useState(0); 
  const [tutorials,setTutorials] = useState({});

   
  useEffect(() => {
    tutorialService.getAll()
      .then((res) => {
        console.log('--------------------------------')
        console.log(res.data.length)
        console.log('--------------------------------')
        setTutorials(res.data);
        console.log(res.data.length);
        setCount(res.data.length)
      }).catch((err)=>{console.log(err)})
  }, []);

  return (
<>
<div className="row">
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="icon-box icon-box-lg bg-success-light rounded-circle">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9715 29.3168C15.7197 29.3168 9.52686 30.4132 9.52686 34.8043C9.52686 39.1953 15.6804 40.331 22.9715 40.331C30.2233 40.331 36.4144 39.2328 36.4144 34.8435C36.4144 30.4543 30.2626 29.3168 22.9715 29.3168Z" stroke="#3AC977" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9714 23.0537C27.7304 23.0537 31.5875 19.1948 31.5875 14.4359C31.5875 9.67694 27.7304 5.81979 22.9714 5.81979C18.2125 5.81979 14.3536 9.67694 14.3536 14.4359C14.3375 19.1787 18.1696 23.0377 22.9107 23.0537H22.9714Z" stroke="#3AC977" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
          </div>
          <div className="total-projects ms-3">
            <h3 className="text-success count">{count}</h3>
            <span>Total Completed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="icon-box icon-box-lg bg-primary-light rounded-circle">
            {}
          </div>
          <div className="total-projects ms-3">
            <h3 className="text-primary count">12</h3>
            <span>Total In Progress</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="icon-box icon-box-lg bg-purple-light rounded-circle">
            {}
          </div>
          <div className="total-projects ms-3">
            <h3 className="text-purple count">07</h3>
            <span>Total Not Started</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6">
    <div className="card box-hover">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="icon-box icon-box-lg bg-danger-light rounded-circle">
            {}
          </div>
          <div className="total-projects ms-3">
            <h3 className="text-danger count">05</h3>
            <span>Total Not Started</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

       

</>
  )
}

export default Ajouter
