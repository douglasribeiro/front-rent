import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProprietarioComponent } from './proprietario.component';
import { ProprietarioFormComponent } from './proprietario-form/proprietario-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProprietarioRoutingModule } from './proprietario-routing.module';
import { ProprietarioService } from './proprietario.service';


@NgModule({
  declarations: [
    ProprietarioComponent,
    ProprietarioFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProprietarioRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProprietarioService
  ]
})
export class ProprietarioModule { }
