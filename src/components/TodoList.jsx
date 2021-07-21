import React, { useContext } from 'react';

import { Todo } from './Todo';
import { TodoContext } from '../providers/todo';

export const TodoList = () => {
  const {
    state: { todos },
  } = useContext(TodoContext);
  console.log(todos)

  return (
    <ul>
      {todos.map(({ id, title }) => <Todo key={id} text={title} />)}
    </ul>
  );
};
