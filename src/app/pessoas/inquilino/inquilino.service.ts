import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Inquilino } from './inquilino';
import { delay, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InquilinoService {

  constructor(private http: HttpClient) { }

  //json-server --watch db.json
  private readonly API = 'http://localhost:3000/inquilinos';

  getInquilinos(){
    return this.http.get<Inquilino[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    )
  }

  loadById(id: number){
    return this.http.get<Inquilino>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(inquilino: any){
    return this.http.post(this.API,inquilino).pipe(take(1));
  }

  private update(inquilino: any){
    return this.http.put(`${this.API}/${inquilino.id}`, inquilino).pipe(take(1));
  }

  save(inquilino: any){
    if(inquilino.id){
      return this.update(inquilino)
    }
    return this.create(inquilino);
  }

  remove(id: any){
    return this.http.delete<Inquilino>(`${this.API}/${id}`).pipe(take(1));
  }
}

