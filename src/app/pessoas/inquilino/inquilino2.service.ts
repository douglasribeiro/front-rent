import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';
import { Inquilino } from './inquilino';

@Injectable({
  providedIn: 'root'
})
export class Inquilino2Service extends CrudService<Inquilino> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}inquilinos`);
  }
}
