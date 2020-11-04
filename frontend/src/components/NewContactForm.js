import React, { Component } from "react";
import App from "../App"
import ReactDOM from 'react-dom';
// import { Button, Form, FormGroup, Input, placeholder } from "bootstrap";

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
                <input type="text" placeholder="user" name="user" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.contact_user)} />
              </form>
              <form>
                <input type="text" placeholder="firstname" name="first_name" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.contact_first_name)} />
              </form>
              <form>
                <input type="text" 
                placeholder="lastname" name="last_name" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.contact_last_name)} />
              </form>      
              <form>
                <input type="text" placeholder="email" name="email" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.contact_email)} />
              </form>
              <form>
                <input type="text" placeholder="phone"  name="phone" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.contact_phone_number)} />
              </form>
              <form>
                <input type="text" placeholder="home_address"name="home_address" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.contact_home_address)} />
              </form>
              <form>
                <input type="text" placeholder="relation" name="relation" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.contact_relation)} />
              </form>
              <form>
                <input type="text" placeholder="group" name="group" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.contact_group)} />
              </form>
              <form>
                <input type="text" placeholder="age" name="age" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.contact_age)} />
              </form>
              <form>
                <input type="text" placeholder="notes" name="notes" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.contact_notes)} />
              </form>
            </form>
            <button>Send</button>
            </div>)//return
            }//render
}
export default NewContactForm;