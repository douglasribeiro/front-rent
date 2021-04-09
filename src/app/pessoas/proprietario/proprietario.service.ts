import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';
import { Proprietario } from './proprietario';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService extends CrudService<Proprietario> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}proprietarios`);
  }
}
