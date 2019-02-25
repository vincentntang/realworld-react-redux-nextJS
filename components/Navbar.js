import React from "react";
import Link from "next/link";

const Navbar = props => (
  <nav className="navbar navbar-light">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">conduit</a>
      </Link>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link active">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/editor">
            <a className="nav-link">
              <i className="ion-compose" />
              &nbsp;New Post
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/settings">
            <a className="nav-link">
              <i className="ion-gear-a" />
              &nbsp;Settings
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/register">
            <a className="nav-link">Sign up</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
