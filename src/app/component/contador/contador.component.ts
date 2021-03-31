import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from './contador.actions';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  contador: number = 0;

  constructor(private store: Store<AppState>) {


  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  incrementar() {
    this.store.dispatch(actions.incrementar())
  }

  decrementar() {
    this.store.dispatch(actions.decrementar())
  }

}
