import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.models";
import * as actions from "./todo.actions";

export const estadoInicial: Todo[] = [
  new Todo("Salvar al mundo"),
  new Todo("Vencer a Thanos"),
  new Todo("Comprar traje de ironMan"),
];

const _todoReducer = createReducer(
  estadoInicial,

  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.limpiarTodos, (state) => state.filter((todo) => !todo.completado)),
  on(actions.borrar, (state, { id }) => state.filter((todo) => todo.id != id)),
  on(actions.toggleAll, (state, { completado }) =>
    state.map((todo) => {
      return {
        ...todo,
        completado: completado,
      };
    })
  ),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
