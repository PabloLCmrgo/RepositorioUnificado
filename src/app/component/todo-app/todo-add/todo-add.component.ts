import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;
  completado:boolean = false;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
  }

  agregar() {
    if (this.txtInput.invalid) { return; }
    this.store.dispatch(actions.crear({ texto: this.txtInput.value }));
    this.txtInput.reset();
  }

  toggleAll(){
    this.completado = !this.completado;
    this.store.dispatch(actions.toggleAll({completado:this.completado}));
     
  }

}
