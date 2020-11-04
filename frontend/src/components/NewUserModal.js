import React, { Component, Fragment } from "react";
import App from "../App";
import ReactDOM from "react-dom";
import NewUserForm from "./NewUserForm"
import { Button, Modal, ModalHeader, ModalBody } from "bootstrap";

import axios from "axios";

import { API_URL } from "../constants";
// import { ModalHeader } from "semantic-ui-react";

class NewUserModal extends Component {
  state = {
    modal: false,
  };
  toggle = () => {
    this.setState((previous) => ({ modal: !previous.modal }));
  };
  render() {
    const create = this.props.create;
    var title= "Edit User"
    var button = <button onClick={this.toggle}>Edit</button>
    if (create) {
        title = "Create New User"
    button = (
        <button color="red" className="float-right" onClick={this.toggle} style= {{width: "400px"}}>Create New</button>
    )
    }
    return <div>
        <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                    <NewUserForm resetState={this.props.resetState}
                    toggle={this.toggle}
                    user={this.props.user} />
                </ModalBody>
            </Modal>
        </Fragment>
    </div>; //return
  } //render
}
export default NewUserModal;
