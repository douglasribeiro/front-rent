import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquilinoDetalheComponent } from './inquilino-detalhe/inquilino-detalhe.component';
import { InquilinoFormComponent } from './inquilino-form/inquilino-form.component';
import { InquilinoComponent } from './inquilino.component';

const inqRoutes: Routes = [
  { path: 'inquilino', component: InquilinoComponent },
  { path: 'inquilino/novo', component: InquilinoFormComponent },
  { path: 'inquilino/editar/:id', component: InquilinoFormComponent },
  { path: 'inquilino/:id', component: InquilinoDetalheComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(inqRoutes)],
  exports: [RouterModule],
})
export class InquilinoRoutingModule {}
