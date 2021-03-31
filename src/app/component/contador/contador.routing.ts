import { Routes } from '@angular/router';


import { ContadorComponent } from './contador.component';

export const ContadorRoutes: Routes = [
	{
		path: '',
		component: ContadorComponent,
		data: {
			title: 'Contador',
			urls: [
				{ title: 'contador', url: '/dashboard' },
				{ title: 'ngComponent' },
				{ title: 'Contador' }
			]
		}
	}
];

