import React from 'react';
import TodoListItem from './todo-list-item';

const ToDoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem label="Drink coffe" />
      </li>
      <li>
        <TodoListItem label="build react app" important />
      </li>
    </ul>
  );
};

export default ToDoList;
