import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioService } from './usuario.service';



@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
