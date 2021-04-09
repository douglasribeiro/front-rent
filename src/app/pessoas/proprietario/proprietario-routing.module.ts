import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProprietarioResolverGuard } from '../guards/proprietario-resolver.guard';
import { ProprietarioFormComponent } from './proprietario-form/proprietario-form.component';
import { ProprietarioComponent } from './proprietario.component';

const propRoutes: Routes = [
  { path: '', component: ProprietarioComponent },
  { path: 'novo', component: ProprietarioFormComponent,
    resolve: {proprietario: ProprietarioResolverGuard}},
  { path: 'editar/:id', component: ProprietarioFormComponent,
    resolve: {proprietario: ProprietarioResolverGuard}},
];

@NgModule({
  imports: [RouterModule.forChild(propRoutes)],
  exports: [RouterModule],
})
export class ProprietarioRoutingModule {}
