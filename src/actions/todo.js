import { TODOS_ACTION_TYPE } from '../constants/todos';

export const addTodo = async (todo) => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    type: TODOS_ACTION_TYPE.add,
    payload: todo
  }
};
