import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RestPassword from "./app/components/ResetPassword"
import Login from "./app/components/Login";
import Register from "./app/components/Register";
import Home from "./app/components/Home";
import Profile from "./app/components/Profile";
import BoardUser from "./app/components/BoardUser";
import BoardModerator from "./app/components/BoardModerator";
import BoardAdmin from "./app/components/BoardAdmin";
import Tutorial from "./app/components/tutorialcomponent";
import TutorialsList from "./app/components/tutorials-listcomponent";
import AddTutorial from "./app/components/add-tutorialcomponent";

import { logout } from "./app/slices/auth";

import EventBus from "./app/common/EventBus";
import EditProfile from "./app/components/EditProfile";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(currentUser.roles.includes("ROLE_USER"))
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
      setShowUserBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router>
      <div>
      <div id="main-wrapper">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
         
               <Link to={"/home"} className="navbar-brand">
            DevHack
          </Link>
          {showUserBoard &&( 
          <div className="navbar-nav mr-auto">
          <div className="header-left">
  <div className="input-group search-area">
    <span className="input-group-text"><a href=";">
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.78605" cy="8.78605" r="8.23951" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5168 14.9447L17.7471 18.1667" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a></span>
    <input type="text" className="form-control" placeholder="Search" />
    
  </div>

</div>

     
          </div>
          )}
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg> {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
          
        </nav>
        </div>  
        {showUserBoard &&( 
 <BoardUser/>
 )}
{ showAdminBoard &&(
<BoardAdmin/>
)}
{
  showModeratorBoard &&(
    <BoardModerator/>
  )
}
   </div>  
   
       

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/" element={<TutorialsList/>} />
            <Route path="/tutorials" element={<TutorialsList/>} />
            <Route path="/add" element={<AddTutorial/>} />
            <Route path="/tutorials/:id" element={<Tutorial/>} />
            <Route path="/RestPassword" element={<RestPassword/>} />
            <Route path="/EditProfile" element={<EditProfile/>} />
         
          </Routes>
        </div>
    
    </Router>
  );
  
};

export default App;
