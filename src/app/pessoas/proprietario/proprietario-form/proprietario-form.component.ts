import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProprietarioService } from '../proprietario.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-proprietario-form',
  templateUrl: './proprietario-form.component.html',
  styleUrls: ['./proprietario-form.component.css']
})
export class ProprietarioFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private service: ProprietarioService,
    private alertService: AlertModalService
  ) { }

  ngOnInit(): void {

    const proprietario = this.route.snapshot.data['proprietario'];

    this.form = this.fb.group({
      id: [proprietario.id],
      nome: [proprietario.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      email: [proprietario.email, [Validators.required, Validators.email]]
    })
  }

  hasError(field: string){
    return this.form?.get(field)?.errors;
  }

  onCancel(){
    this.submitted = false;
    this.form?.reset();
    this.location.back();
  }

  onSubmit(){
    this.submitted = true;
    if(this.form?.valid){

      let msgSuccess = "Registro de inquilino criado com sucesso.";
      let msgErro = "Não foi possivel criar o registro do Inquilino";
      if(this.form.value.id){
        msgSuccess = "Registro de inquilino alterado com sucesso.";
        msgErro = "Não foi possivel alterar o registro do Inquilino";
      }

      this.service.save(this.form.value).subscribe(
          success => {
            this.alertService.showAlertSuccess(msgSuccess);
            this.location.back();
          },
          error => this.alertService.showAlertDanger(msgErro)
        );
    }
  }


}
