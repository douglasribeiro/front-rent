import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {path: 'inquilino', loadChildren: () => import('./pessoas/inquilino/inquilino.module')
    .then(m => m.InquilinoModule)},
    {path: 'usuario', loadChildren: () => import('./pessoas/usuario/usuario.module')
    .then(m => m.UsuarioModule)},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
