import React, { Component } from "react";
import App from "../App"
import ReactDOM from 'react-dom';
// import { Button, Form, FormGroup, Input, Label } from "bootstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewContactForm extends Component {
    constructor(){
        super();
        this.state = {
            pk: 0,
            contact_user: "",
            contact_first_name: "",
            contact_last_name: "",
            contact_email: "",
            contact_phone_number: "",
            contact_home_address: "",
            contact_relation: "",
            contact_group: "",
            contact_age: "",
            contact_notes: "",
        }
    }
    componentDidMount() {
        if (this.props.user) {
            let {pk, contact_user, contact_first_name, contact_last_name, contact_relation, contact_email, contact_group, contact_home_address,contact_notes, contact_phone_number,contact_age }  = this.props.user;
            this.setState({pk, contact_user, contact_first_name, contact_last_name, contact_relation, contact_email, contact_group, contact_home_address,contact_notes, contact_phone_number, contact_age})
        }
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
             <form onSubmit={this.props.user ? this.editUser : this.createContact}>
              <form>
    
                <input type="text" label="first_name" name="user_name" onChange={this.onChange} value={this.defaultIfEmpty(this.state.contact_first_name)} />
              </form>
              <form>
    
                <input type="text" name="user_email" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_email)} />
              </form>      <form>
    
                <input type="text" name="user_password" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_password)} />
              </form>
            </form>
            <button>Send</button>
            </div>)}
}
export default NewContactForm;