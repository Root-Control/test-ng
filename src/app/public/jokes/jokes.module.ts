import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

import { JokesRoutingModule } from './jokes.routing.module';
import { JokesService } from './jokes.service';

import { MaterialModule } from '../../material-module';  

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import  { FilterPipe } from '../../common/pipes/filter';

@NgModule({
  declarations: [FilterPipe, ListComponent, ViewComponent],
  imports: [
  	JokesRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  	JokesService
  ]
})
export class JokesModule { }
