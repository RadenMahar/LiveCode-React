import createStore from "unistore";
import axios from "axios";

export const store = createStore({
  email: "",
  name: "",
  is_login: "no",
  api_key: "",
  values: []
});

export const actions = store => ({
  setEmail: (state, value) => {
    return { email: value };
  },

  //   handleChange: (state, event) => {
  //     event.preventDefault();
  //     axios
  //       .get("https://api-todofancy.herokuapp.com/api/movies")
  //       .then(response => {
  //         store.setState({ values: response.data.movies });
  //         console.log(response);
  //         // console.log(this.state.data);
  //       })
  //       .catch(error => {
  //         console.log("terdapat eror ini :", error);
  //       });
  //   },

  setName: (state, value) => {
    return { name: value };
  },
  setLogin: (state, value) => {
    return { is_login: value };
  },
  setKeyword: (state, value) => {
    return { keyword: value };
  },
  setValue: (state, value) => {
    return { values: value };
  },
  setSearch: (state, value) => {
    return { search: value };
  }
});

// store.getState().search
