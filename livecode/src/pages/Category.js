import React from "react";
import Home from "./Home";
import { actions } from "../Store/store";
import { connect } from "unistore/react";

class Category extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            {this.props.values.map((value, index) => {
              if (value.Category === this.props.match.params.source_name) {
                return (
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                    key={index}
                  >
                    <div className="col-md-4">
                      <img
                        src={value.Poster}
                        class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <h4>{value.Title}</h4>
                      <br />
                      <p>
                        <strong>{value.Year}</strong>
                      </p>
                      <br />
                      <p>{value.Synopsis}</p>
                    </div>
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "email, name, is_login, values, keyword",
  actions
)(Category);

// if(this.match.params.source_name === this.props.values.Category)
