import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inquilino-form',
  templateUrl: './inquilino-form.component.html',
  styleUrls: ['./inquilino-form.component.css']
})
export class InquilinoFormComponent implements OnInit {

  form?: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      email: [null, [Validators.required, Validators.email]]
    })

  }

  hasError(field: string){
    return this.form?.get(field)?.errors;
  }

  onSubmit(){
    this.submitted = true;
    if(this.form?.valid){

    }
  }

  onCancel(){
    this.submitted = false;
    this.form?.reset();
  }

}
