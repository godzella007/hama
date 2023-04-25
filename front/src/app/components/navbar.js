import React from 'react'

const navbar = () => {
  return (
    <div class="header">
       <div class="header-content">
           <nav class="navbar navbar-expand">
                <div class="collapse navbar-collapse justify-content-between">
                <div className="header-left">
  <div className="input-group search-area">
    <span className="input-group-text"><a href="">
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.78605" cy="8.78605" r="8.23951" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5168 14.9447L17.7471 18.1667" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a></span>
    <input type="text" className="form-control" placeholder="Search" />
    
  </div>

</div>

                   </div>
            </nav>
        </div>
     </div>
  )
}

export default navbar
