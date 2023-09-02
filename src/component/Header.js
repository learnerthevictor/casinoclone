import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div className="header-bg py-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <p className=" ">
              <a className="logo" href="/">
                TomKru
              </a>
            </p>
            <Link to='/login' className="login text-decoration-none">{props.title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
