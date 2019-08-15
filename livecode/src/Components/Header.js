import React from "react";
import logo from "../logo192.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-md-2">
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">
                <img
                  src={logo}
                  width="80"
                  height="40"
                  className="d-inline-block align-top"
                  alt=""
                />
                Movie
              </a>
            </nav>
          </div>
          {/* <div className="col-md-4 mt-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link to="/" a className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Kategori
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link to="/hukum" className="nav-link">
                        romance
                      </Link>
                      <Link to="/budaya" className="dropdown-item">
                        action
                      </Link>
                      <Link to="/economi" className="nav-link">
                        fiction
                      </Link>
                      <Link to="/sosial" className="dropdown-item">
                        comedy
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div> */}
          {/* <div className="col-md-4 mt-2">
            <nav className="navbar navbar-light bg-light">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Berita"
                  aria-label="Search"
                  onChange={props.handle}
                />
                <button
                  className="button btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </nav>
          </div> */}
          <div className="col-md-2 mt-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link to="/profil" className="nav-link">
                      Profil <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/masuk" className="nav-link">
                      Login <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={() => props.handleSignOut()}
                    >
                      Keluar <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
