import React, { Component } from "react";
import App from "../App";
import ReactDOM from "react-dom";
import {Table} from "bootstrap";

import axios from "axios";

import { API_URL } from "../constants";
import NewUserModal from "./NewUserModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class UserList extends Component {
  render() {
    const users = this.props.users;

    return (
      <div>
        
      </div>
    )
  }
}
export default UserList;


    {/* <Table dark>
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
      </Table> */}