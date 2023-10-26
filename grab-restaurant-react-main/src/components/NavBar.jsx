import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
       <div class="container-fluid">
            <Link className="navbar-brand" to="/">
                Grab Restaurant
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-lable="Toggle navigation"
            >
                <span className="navbar-toggle-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
               <Link className="nav-link active" aria-current="page" to="/">
                Home
               </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/add">
                    Add
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/search">
                    Search
                </Link>
            </li>
        </ul>
    </div>
  </div>
</nav>
  );
};

export default NavBar;