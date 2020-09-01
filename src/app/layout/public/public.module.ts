import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { RouterModule } from '@angular/router';

import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 

@NgModule({
  declarations: [HeaderComponent, PublicLayoutComponent],
  imports: [
  	MatIconModule,
  	MatButtonModule,
  	MatToolbarModule,
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }
