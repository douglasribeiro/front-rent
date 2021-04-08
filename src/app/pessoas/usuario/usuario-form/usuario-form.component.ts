import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { UsuarioService } from '../usuario.service';
import { Location } from '@angular/common';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
})
export class UsuarioFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: UsuarioService,
    private alertService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //let usuario: any; // = this.route.snapshot.data['usuario'];
    /*
    this.route.params.subscribe(
      (params: any) => { 
        const id = params['id']
        this.service.loadById(id).subscribe(
          user => {
            this.updateForm(user);
          });
      }
    )
*/
/*
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.loadById(id))
      )
      .subscribe((user) => this.updateForm(user));
*/
    const usuario = this.route.snapshot.data['usuario']; 

    this.form = this.fb.group({
      id: [usuario.id],
      nome: [usuario.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(70)],
      ],
    });
  }

  updateForm(user: any) {
    this.form.patchValue({
      id: user.id,
      nome: user.nome,
    });
  }

  hasError(field: string) {
    return this.form?.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      let msgSuccess = 'Registro de Usuario criado com sucesso.';
      let msgErro = 'Não foi possivel criar o registro do Usuario';
      if (this.form.value.id) {
        msgSuccess = 'Registro de Usuario alterado com sucesso.';
        msgErro = 'Não foi possivel alterar o registro do Usuario';
      }

      this.service.save(this.form.value).subscribe(
        (success) => {
          this.alertService.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        (error) => this.alertService.showAlertDanger(msgErro)
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form?.reset();
    this.location.back();
  }
}
