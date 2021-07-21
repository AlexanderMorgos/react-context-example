import { TODOS_ACTION_TYPE } from '../constants/todos';

export const addTodo = (todo) => ({
  type: TODOS_ACTION_TYPE.add,
  payload: todo
});
