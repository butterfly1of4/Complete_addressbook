import React, { Component } from "react";
import App from "../App"
import ReactDOM from 'react-dom';
// import { Button, Form, FormGroup, Input, Label } from "bootstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewUserForm extends Component {
  constructor() {
    super();
    this.state = {
      pk: 0,
      user_name: "",
      user_email: "",
      user_password: "",
    };
  }
componentDidMount() {
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
    axios.post(API_URL, this.state).then(()=> {
        this.props.resetState()
        this.props.toggle()
    })
}
editUser = e => {
  e.preventDefault()
  axios.put(API_URL = this.state.pk, this.state).then(() => {
    this.props.resetState()
    this.props.toggle()
  })
}
defaultIfEmpty = value => {
  return value === ""?"" : value
}
  
  render(){
    return (
      <div>
         <form onSubmit={this.props.user ? this.editUser : this.createUser}>
          <form>

            <input type="text" name="user_name" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_name)} />
          </form>
          <form>

            <input type="text" name="user_email" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_email)} />
          </form>      <form>

            <input type="text" name="user_password" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_password)} />
          </form>
        </form>
        <button>Send</button>
        {/* <Form onSubmit={this.props.user ? this.editUser : this.createUser}>
          <FormGroup>
            <Label for="user_name">User Name: </Label>
            <Input type="text" name="user_name" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_name)} />
          </FormGroup>
          <FormGroup>
            <Label for="user_email">User Email: </Label>
            <Input type="text" name="user_email" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_email)} />
          </FormGroup>      <FormGroup>
            <Label for="user_password">User Password: </Label>
            <Input type="text" name="user_password" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_password)} />
          </FormGroup>
        </Form>
        <Button>Send</Button> */}
      </div>
    )
  }

}
export default NewUserForm;
