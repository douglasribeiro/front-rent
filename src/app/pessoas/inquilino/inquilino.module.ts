import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquilinoComponent } from './inquilino.component';
import { InquilinoFormComponent } from './inquilino-form/inquilino-form.component';
import { InquilinoRoutingModule } from './inquilino-routing.module';
import { InquilinoService } from './inquilino.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InquilinoComponent, 
    InquilinoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InquilinoRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    InquilinoService
  ]
})
export class InquilinoModule { }
