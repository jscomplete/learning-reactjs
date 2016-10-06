import React, { Component, PropTypes } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { titleValue: '' };
  }

  static propTypes = {
    addBookAction: PropTypes.func.isRequired
  };

  handleButtonClick = (event) => {
    event.preventDefault();

    this.props.addBookAction(
      this.state.titleValue
    );

    this.setState({ titleValue: '' });
  };

  handleTitleChange = (event) => {
    this.setState({ titleValue: event.target.value });
  };

  render() {
    return (
      <div className="Form">
        <input type="text" placeholder="Book title"
               value={this.state.titleValue}
               onChange={this.handleTitleChange}
        />
        <button onClick={this.handleButtonClick}>
          Add Book
        </button>
      </div>
    );
  }
}

export default Form;
