import { Action, createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, multiplicar, dividir, reset } from './contador.actions';




/* export function contadorReducer(state: number = 10, action: Action) {
    switch (action.type) {
           case incrementar.type: // le type es contador incrementar
               return state + 1
               break;
           case decrementar.type:
               return state -1
               break;
           default:
               return state;
               break;
       }
   
   } */

export const initialState = 20;

const _contadorReducer = createReducer(
    initialState,
    on(incrementar, (state) => state + 1),
    on(decrementar, (state) => state - 1),
    on(multiplicar, (state, { numero }) => state * numero),  //{} desectructuración de la propiedad
    on(dividir, (state, { numero }) => state / numero),
    on(reset, (state) => initialState) 
);

export function contadorReducer(state: any, action: any) {
    return _contadorReducer(state, action);
}
