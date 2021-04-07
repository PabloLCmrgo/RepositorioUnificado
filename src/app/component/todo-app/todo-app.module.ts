import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { TodoAppComponent } from './todo-app.component';
import { RouterModule } from '@angular/router';
import { TodoAppRoutes } from './todo-app.routing';
import { FooterComponent } from './footer/footer.component';
import { MatListModule } from '@angular/material/list';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

//Angular Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FiltroPipe } from './filtro.pipe';





@NgModule({
  declarations: [TodoAppComponent,
    FooterComponent,
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    FiltroPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(TodoAppRoutes),
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatListModule
  ],
  exports: [TodoAppComponent]
})
export class TodoAppModule { }
