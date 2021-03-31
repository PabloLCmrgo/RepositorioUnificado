import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxBasicExampleComponent } from './ngrx-basic-example.component';
import { RouterModule } from '@angular/router';
import { BasicExampleRoutes } from './basic-example.routing';



@NgModule({
  declarations: [NgrxBasicExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BasicExampleRoutes),
  ]
})
export class NgrxBasicExampleModule { }
