import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Inquilino } from './inquilino';
import { delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InquilinoService {

  //json-server --watch db.json
  private readonly API = 'http://localhost:3000/inquilinos';

  getInquilinos(){
    return this.http.get<Inquilino[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    )
  }

  constructor(private http: HttpClient) { }

}

