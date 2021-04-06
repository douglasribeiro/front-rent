import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoencontradoComponent } from './naoencontrado/naoencontrado.component';
import { ProprietarioDetalheComponent } from './proprietario-detalhe/proprietario-detalhe.component';
import { ProprietarioComponent } from './proprietario.component';

const propRoutes: Routes = [
  {path: 'proprietario', component: ProprietarioComponent},
  {path: 'proprietario/:id', component: ProprietarioDetalheComponent},
  {path: 'naoEncontrado', component: NaoencontradoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(propRoutes)],
  exports: [CommonModule]
})
export class ProprieatrioRoutingModule { }
