import React from 'react';
import { uuid } from 'uuidv4';

import { createTodo, getTodos } from './actions/todo';
import { TodoContext } from './providers/todo';
import { TodoManagement } from './components/TodoManagement';
import { TodoList } from './components/TodoList';

export const App = () => {
  const { dispatch } = React.useContext(TodoContext);
  
  const handleSubmit = React.useCallback(async (data) => {
    dispatch(
      await createTodo({
        id: uuid(),
        title: data,
      })
    );

    getTodos();
  }, [dispatch]);
  
  return (
    <>
      <TodoManagement onSubmit={handleSubmit} />
      <TodoList />
    </>
  );
}
