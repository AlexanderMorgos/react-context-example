import React from 'react';

import { TodoProvider } from './providers/todo';
import { TodoManagement } from './components/TodoManagement';
import { TodoList } from './components/TodoList';

export default function App() {
  return (
    <TodoProvider>
      <TodoManagement />
      <TodoList />
    </TodoProvider>
  );
}
