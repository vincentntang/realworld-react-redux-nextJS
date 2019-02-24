import React from "react";

const Navbar = props => (
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        conduit
      </a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <a class="nav-link active" href="">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="ion-compose" />
            &nbsp;New Post
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="ion-gear-a" />
            &nbsp;Settings
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            Sign up
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
