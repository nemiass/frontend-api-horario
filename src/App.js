import Login from "./components/login";
import React, { Component } from "react";
import Home from './components/home';
import "./bootstrap.min.css";

class App extends Component {
  state = {
    id: false,
    loged: false,
    user: "",
    password: "",
    tipo: ""
  }

  componentDidMount() {
    this.updateLogin();
  }

  updateLogin = () => {
    this.setState({
      id: localStorage.getItem("id") ?? false,
      loged: localStorage.getItem("user") ?? false,
      user: localStorage.getItem("password") ?? "",
      password: localStorage.getItem("loged") ?? "",
      tipo: localStorage.getItem("tipo") ?? ""
    })
  }

  login = async (e) => {
    const { user, password } = this.state;
    const uri = `http://54.234.31.116:3000/api/validar/${user}/${password}`;
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data);

    if (data.estado) {
      const {id, user, password, tipo} = data.user;
      localStorage.setItem("id", id);
      localStorage.setItem("loged", true);
      localStorage.setItem("user", user)
      localStorage.setItem("password", password)
      localStorage.setItem("tipo", tipo)

      this.updateLogin()
    }
  }

  logout = () => {
    localStorage.clear()
    this.updateLogin()
  }

  render() {
    console.log(this.state)
    if (!this.state.loged) {
      return (
        <Login
          user={this.user}
          login={this.login}
          setState={this.setState.bind(this)}
        />
      )
    }

    return (
      <Home user={this.state} logout={this.logout} />
    )
  }
}


export default App;
