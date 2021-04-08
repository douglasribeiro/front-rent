import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CrudService<Usuario> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}usuario`);
  }
}
