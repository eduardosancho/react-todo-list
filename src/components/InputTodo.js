import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoProps } = this.props;
    const { title } = this.state;
    if (title.trim()) {
      addTodoProps(title.trim());
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: propTypes.func.isRequired,
};
