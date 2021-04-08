import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioResolverGuard } from '../guards/usuario-resolver.guard';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioComponent } from './usuario.component';

const inqRoutes: Routes = [
  { path: '', component: UsuarioComponent },
  { path: 'novo', component: UsuarioFormComponent,
    resolve: {usuario: UsuarioResolverGuard}},
  { path: 'editar/:id', component: UsuarioFormComponent,
    resolve: {usuario: UsuarioResolverGuard}},
];

@NgModule({
  imports: [RouterModule.forChild(inqRoutes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}