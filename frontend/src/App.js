import logo from './logo.svg';
import './App.css';
import NewUserForm from './components/NewUserForm.js'
import ReactDOM from 'react-dom';
import NewContactForm from "./components/NewContactForm.js";
import Header from "./components/Header"
import Home from "./components/Home"
import UserList from "./components/UserList"
import { Component, Fragment } from 'react';
import axios from "axios";
import { API_URL } from "./constants/index";


class App extends Component {
  render() {
    return(
      <div>
        <Fragment>
          <Header />
          <Home />
        </Fragment>
      </div>
    )
  }
}

export default App;
