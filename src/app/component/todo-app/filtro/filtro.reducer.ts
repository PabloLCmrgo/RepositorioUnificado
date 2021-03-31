import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(initialState,
    on(setFiltro, (state: filtrosValidos, { filtro }) => filtro),

);

export function filtroreducer(state: any, action: any) {
    return _filtroReducer(state, action);
}