import React, { Component, Fragment } from "react";
import App from "../App";
import ReactDOM from "react-dom";
// import { Button, Form, FormGroup, Input, Label } from "bootstrap";

import axios from "axios";

import { API_URL } from "../constants";
import { ModalHeader } from "semantic-ui-react";

class ConfirmRemovalModal extends Component {
  state = {
    modal: false,
  };
  toggle = () => {
    ({
      modal: !previous.modal,
    });
  };
  deleteUser = (pk) => {
    axios.delete(API_URL + pk).then(() => {
      this.props.resetState();
      this.toggle();
    });
  }; //state
  render() {
    return (
      <div>
        <Fragment>
          <button color="blue" onClick={() => this.toggle()}>
            Delete
          </button>
          <Modal isOpen={this.state.modal} toggle={this.togle}>
            <ModalHeader toggle={this.toggle}>
                Confirm delete?
            </ModalHeader>
            <ModalFooter>
                <button type="button" onClick={() => this.toggle()}>
                    Cancel
                </button>
                <button type="button" color="blue" onClick={() => this.deleteUser(this.props.pk)}>
                    Yes
                </button>
            </ModalFooter>
          </Modal>
        </Fragment>
      </div>
    );
  }
} //component
export default ConfirmRemovalModal;
