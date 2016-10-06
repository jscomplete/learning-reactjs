import React, { Component, PropTypes } from 'react';

class Form extends Component {
  static propTypes = {
    addBookAction: PropTypes.func.isRequired
  };

  handleButtonClick = (event) => {
    event.preventDefault();

    this.props.addBookAction(
      document.getElementById("titleInput").value
    );
  };

  render() {
    return (
      <div className="Form">
        <input type="text" placeholder="Book title" id="titleInput" />
        <button onClick={this.handleButtonClick}>
          Add Book
        </button>
      </div>
    );
  }
}

export default Form;
