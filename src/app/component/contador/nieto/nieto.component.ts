import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from 'src/app/store/actions/counter.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  contador:number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
    .subscribe(contador => {
      this.contador = contador;
    });
  }

  reset(){
    this.store.dispatch(reset());
  }

}
