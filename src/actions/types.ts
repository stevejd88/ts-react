import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;

// ===================================================================
// ============================= NOTES / =============================
// ===================================================================
// 1. Without declaring fetchTodos: 'FETCH_TODOS' with a unique string
// redux will automatically assign a unique number to the declaration
// starting at 0. For this coures it's fine, but not on bigger projects
// 2. We can export a type union to other files to look a little more
// clean.
