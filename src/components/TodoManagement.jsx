import React, { useContext } from 'react';
import { uuid } from 'uuidv4';

import { TodoContext } from '../providers/todo';
import { addTodo } from '../actions/todo';

export const TodoManagement = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const { dispatch } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }

    setSubmitting(true);

    dispatch(
      await addTodo({
        id: uuid(),
        title: inputValue,
      })
    );
    setInputValue('');

    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleInputChange} />
      <button type="submit">
        Add Todo
      </button>
      {submitting && <div>Loading</div>}
    </form>
  );
};
