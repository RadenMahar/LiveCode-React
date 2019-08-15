import React from "react";
import Header from "../Components/Header";
import Header1 from "../Components/Header";
import Body from "../Components/Body";
import axios from "axios";
import { actions } from "../Store/store";
import { connect } from "unistore/react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignOut = () => {
    this.props.setLogin("no");
    console.log("ini login", this.props.is_login);
    this.props.history.replace("/");
  };

  componentWillMount = () => {
    axios
      .get("https://api-todofancy.herokuapp.com/api/movies")
      .then(response => {
        this.props.setValue(response.data.movies);
        console.log(response);
        // console.log(this.state.data);
      })
      .catch(error => {
        console.log("terdapat eror ini :", error);
      });
  };

  render() {
    return (
      <div>
        <Header handleSignOut={this.handleSignOut} />
        <div className="container">
          <div class="row">
            <Body />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "email, name, is_login, values, keyword",
  actions
)(Home);
