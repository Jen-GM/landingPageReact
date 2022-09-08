import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a class="navbar-brand ms-5">Start Bootstrap</a>
          <div class="navbar-nav navbar-expand" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;