import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList(props) {
  const { todos } = props;
  const { handleChangeProps } = props;
  const { deleteTodoProps } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: propTypes.arrayOf(Object).isRequired,
  handleChangeProps: propTypes.func.isRequired,
  deleteTodoProps: propTypes.func.isRequired,
};

export default TodosList;
