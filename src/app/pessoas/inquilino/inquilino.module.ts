import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquilinoComponent } from './inquilino.component';
import { InquilinoFormComponent } from './inquilino-form/inquilino-form.component';
import { InquilinoDetalheComponent } from './inquilino-detalhe/inquilino-detalhe.component';
import { InquilinoRoutingModule } from './inquilino-routing.module';
import { InquilinoService } from './inquilino.service';



@NgModule({
  declarations: [
    InquilinoComponent, 
    InquilinoFormComponent,
    InquilinoDetalheComponent
  ],
  imports: [
    CommonModule,
    InquilinoRoutingModule,
  
  ],
  providers: [
    InquilinoService
  ]
})
export class InquilinoModule { }
