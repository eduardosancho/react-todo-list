import React from 'react';
import propTypes from 'prop-types';

export default function TodoItem(props) {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <button type="submit" onClick={() => deleteTodoProps(todo.id)}>
        Delete
      </button>
      {todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: propTypes.objectOf(String).isRequired,
  handleChangeProps: propTypes.func.isRequired,
  deleteTodoProps: propTypes.func.isRequired,
};
