import { Component, OnInit } from '@angular/core';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { InquilinoService } from '../inquilino.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-inquilino-form',
  templateUrl: './inquilino-form.component.html',
  styleUrls: ['./inquilino-form.component.css']
})
export class InquilinoFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private inquilinoService: InquilinoService,
    private alertService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    /*this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const inqui$ = this.inquilinoService.loadById(id);
        inqui$.subscribe(inq => {
          this.updateInquilino(inq);
        })
        
      }
    )*/
    /*this.route.params.pipe(
      map((params: any) => params['id']),
      switchMap(id => this.inquilinoService.loadById(id))
    ).subscribe(inquilino => this.updateInquilino(inquilino));*/

    const inquilino = this.route.snapshot.data['inquilino'];

    this.form = this.fb.group({
      id: [inquilino.id],
      nome: [inquilino.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      email: [inquilino.email, [Validators.required, Validators.email]]
    })

  }

  /*updateInquilino(inquilino: any){
    this.form.patchValue({
      id: inquilino.id,
      nome: inquilino.nome,
      email: inquilino.email
    })
  }*/

  hasError(field: string){
    return this.form?.get(field)?.errors;
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

      this.inquilinoService.save(this.form.value).subscribe(
          success => {
            this.alertService.showAlertSuccess(msgSuccess);
            this.location.back();
          },
          error => this.alertService.showAlertDanger(msgErro)
        );

      /*if(this.form.value.id){
        this.inquilinoService.update(this.form.value).subscribe(
          success => {this.alertService.showAlertSuccess('Alterado com sucesso!');
          this.location.back();
        },
          error => this.alertService.showAlertDanger('Erro ao alterar. Tente novamente mais tarde.')
        );
      }else{
        this.inquilinoService.create(this.form.value).subscribe(
          success => {this.alertService.showAlertSuccess('Salvo com sucesso!');
          this.location.back();
        },
          error => this.alertService.showAlertDanger('Erro ao salvar. Tente novamente mais tarde.')
        );
      }*/
      
    }
  }

  onCancel(){
    this.submitted = false;
    this.form?.reset();
    this.location.back();
  }

  

}


