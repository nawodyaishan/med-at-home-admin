import React from "react";
import './Header.css'; 
import './style.css';
import favicon from "./img/favicon.png";



function Header(){

  return(
    

    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" >
          <img src={favicon} alt="" width="60%" height="70%"/>
        </a>
        <a className="navbar-brand" href="#" Style={{Color:"black"}}>Med @ Home</a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active"  href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/patients">Patients</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/doctors">Doctors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/records">Records</a>
          </li>
        
          </ul>
        </div>
      </div>
    </nav>

)
}

export default Header;