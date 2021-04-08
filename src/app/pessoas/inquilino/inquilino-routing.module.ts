import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquilinoResolverGuard } from '../guards/inquilino-resolver.guard';
import { InquilinoFormComponent } from './inquilino-form/inquilino-form.component';
import { InquilinoComponent } from './inquilino.component';

const inqRoutes: Routes = [
  { path: '', component: InquilinoComponent },
  { path: 'novo', component: InquilinoFormComponent,
    resolve: {inquilino: InquilinoResolverGuard}},
  { path: 'editar/:id', component: InquilinoFormComponent ,
    resolve: {inquilino: InquilinoResolverGuard}},
];

@NgModule({
  imports: [RouterModule.forChild(inqRoutes)],
  exports: [RouterModule],
})
export class InquilinoRoutingModule {}