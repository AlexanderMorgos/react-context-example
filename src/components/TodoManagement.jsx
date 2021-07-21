import React from 'react';


export const TodoManagement = ({ onSubmit }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = React.useCallback(async (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }

    await onSubmit(inputValue);
    setInputValue('');
  }, [onSubmit, inputValue]);

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleInputChange} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  );
};
