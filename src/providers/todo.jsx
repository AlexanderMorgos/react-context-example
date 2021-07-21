import React, { useReducer } from 'react';

const defaultState = {
  todos: []
};

const reducer = (
  state,
  action
) => {
  const actions = {
    ADD: {
      ...state,
      todos: [...state.todos, action.payload]
    }
  };

  return actions[action.type] || state;
};

export const TodoContext = React.createContext({});

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>
  );
};