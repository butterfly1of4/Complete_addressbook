import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewContactForm extends Component {
  constructor() {
    super();
    this.state = {
      pk: 0,
      user_name: "",
      user_email: "",
      user_password: "",
    };
componentDidMount(){
    if (this.props.user) {
        let {pk, user_name, user_email, user_password}  = this.props.user;
        this.setState({pk, user_name, user_password, user_email})
    }
}
onChange = e  => {
    this.setState({[e.target.name]: e.target.value})
}
createUser = e => {
    e.preventDefault()
    axios.post(API_URL, this.state).then()=> {
        this.props.resetState()
        this.props.toggle()
    }
}
  }

}
export default NewContactForm;
