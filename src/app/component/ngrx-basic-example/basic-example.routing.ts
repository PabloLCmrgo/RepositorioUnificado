import { Routes } from '@angular/router';


import { NgrxBasicExampleComponent } from './ngrx-basic-example.component';

export const BasicExampleRoutes: Routes = [
	{
		path: '',
		component: NgrxBasicExampleComponent,
		data: {
			title: 'basic-example',
			urls: [
				{ title: 'basic-example', url: '/dashboard' },
				{ title: 'ngComponent' },
				{ title: 'basic-example' }
			]
		}
	}
]
