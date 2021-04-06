import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProprietarioDetalheComponent } from './proprietario-detalhe/proprietario-detalhe.component';
import { ProprietarioFormComponent } from './proprietario-form/proprietario-form.component';
import { NaoencontradoComponent } from './naoencontrado/naoencontrado.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProprieatrioRoutingModule } from './proprietario-routing.module';



@NgModule({
  declarations: [
    ProprietarioDetalheComponent,
    ProprietarioFormComponent,
    NaoencontradoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProprieatrioRoutingModule
  ]
})
export class ProprietarioModule { }
