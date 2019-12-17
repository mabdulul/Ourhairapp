import React, { Component } from "react";

// replace the <h1> with the correct information; it;s just a placeholder
class Modal extends Component {
  state = { show: false, divtest: <h1> Hello</h1> };

  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return <main></main>;
  }
}

export default Modal;
