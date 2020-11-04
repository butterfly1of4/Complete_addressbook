import React, { Component } from "react";
import {Col, Row, Container} from "bootstrap"
import UserList from "./UserList";
import NewUserModal from "./NewUserModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    this.resetState();
  }
  getUsers = () => {
    axios.get(API_URL).then(res => this.setState({ users: res.data }))
  };
  resetState = () => {
    this.getUsers()
  };

  render() {
    return (
      <div>
    
      </div>
    )
  } //render
} //component
export default Home;
