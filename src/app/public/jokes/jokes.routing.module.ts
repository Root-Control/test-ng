import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicLayoutComponent } from '../../layout/public/public-layout/public-layout.component';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
	path: 'jokes',
	component: PublicLayoutComponent,
	children: [{
		path: '',
		component: ListComponent
	},
	{
		path: ':jokeId',
		component: ViewComponent
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }


