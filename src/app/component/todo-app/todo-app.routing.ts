import { Routes } from '@angular/router';


import { TodoAppComponent } from './todo-app.component';

export const TodoAppRoutes: Routes = [
	{
		path: '',
		component: TodoAppComponent,
		data: {
			title: 'todo-app',
			urls: [
				{ title: 'todo-app', url: '/dashboard' },
				{ title: 'ngComponent' },
				{ title: 'todo-app' }
			]
		}
	}
];

