import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NietoComponent } from './nieto/nieto.component';
import { ContadorComponent } from './contador.component';
import { HijoComponent } from './hijo/hijo.component';
import { RouterModule } from '@angular/router';
import { ContadorRoutes } from './contador.routing';




@NgModule({
  declarations: [
    NietoComponent,
    ContadorComponent,
    HijoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ContadorRoutes),
  ],
  exports:[HijoComponent]
})
export class ContadorModule { }
