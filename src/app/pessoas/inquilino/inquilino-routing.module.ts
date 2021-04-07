import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquilinoResolverGuard } from '../guards/inquilino-resolver.guard';
import { InquilinoDetalheComponent } from './inquilino-detalhe/inquilino-detalhe.component';
import { InquilinoFormComponent } from './inquilino-form/inquilino-form.component';
import { InquilinoComponent } from './inquilino.component';

const inqRoutes: Routes = [
  { path: 'inquilino', component: InquilinoComponent },
  { path: 'inquilino/novo', component: InquilinoFormComponent,
    resolve: {inquilino: InquilinoResolverGuard}},
  { path: 'editar/:id', component: InquilinoFormComponent ,
    resolve: {inquilino: InquilinoResolverGuard}},
  { path: ':id', component: InquilinoDetalheComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(inqRoutes)],
  exports: [RouterModule],
})
export class InquilinoRoutingModule {}
