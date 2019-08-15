import React from "react";
// import axios from "axios";
// import Header from "./HeaderNews";
import { actions } from "../Store/store";
import { connect } from "unistore/react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import Fiction from "../img/Fiction.jpg";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.data);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to="/romance">
              <h4>Romance</h4>
            </Link>

            <br />
            <img
              src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
              alt=""
            />
            <Link to="/romance" class="btn btn-primary" role="button">
              See Movies
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/action">
              <h4>Action</h4>
            </Link>

            <br />
            {/* {this.action.map((value, index) => {
              if (index === 0) {
                return ( */}
            <img
              src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
              alt=""
            />
            {/* );
              }
            })} */}
            <Link to="/action" class="btn btn-primary" role="button">
              See Movies
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/fiction">
              <h4>Fiction</h4>
            </Link>
            <br />
            {/* {this.fiction.map((value, index) => {
              if (index === 0) { */}
            <img src={Fiction} alt="" />;{/* }
            })} */}
            <Link to="/fiction" class="btn btn-primary" role="button">
              See Movies
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/comedy">
              <h4>Comedy</h4>
            </Link>
            <br />
            {/* {this.comedy.map((value, index) => {
              if (index === 0) {
                return ( */}
            <img
              src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
              alt=""
            />
            {/* ); } })} */}
            <Link to="/comedy" class="btn btn-primary" role="button">
              See Movies
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "email, name, is_login, values, keyword",
  actions
)(Body);
