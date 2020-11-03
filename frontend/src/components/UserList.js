import React, { Component } from "react";
import App from "../App";
import ReactDOM from "react-dom";
// import { Button, Form, FormGroup, Input, Label } from "bootstrap";

import axios from "axios";

import { API_URL } from "../constants";
import NewUserModel from "./NewUserModal";
import ConfirmRemovalModal from "./ConfirmModalRemoval";

class UserList extends Component {
  render() {
    const users = this.props.users;

    return (
      <Table dark>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {!users || users.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Empty Form</b>
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.pk}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td align="center">
                  <NewUserModal
                    create={false}
                    user={user}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={user.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}
export default UserList;
