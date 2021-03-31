import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.models';
import { borrar, editar, toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;

  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef
  constructor(private store: Store<AppState>) {
    this.chkCompletado = new FormControl('');
    this.txtInput = new FormControl('');
    /* this.todo = {
      texto: '',
      id: 0,
      completado: true
    }; */
  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(val => {
      this.store.dispatch(toggle({ id: this.todo.id }));
    })
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    this.txtInputFisico?.nativeElement.select()
  }
  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.texto) { return; }
    this.store.dispatch(
      editar({
        id: this.todo.id,
        texto: this.txtInput.value
      })
    );
  }

  borrar() {
    this.store.dispatch(borrar({ id: this.todo.id }));
  }
}
