import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Proprietario } from '../proprietario/proprietario';
import { ProprietarioService } from '../proprietario/proprietario.service';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioResolverGuard implements Resolve<Proprietario> {
  
  constructor(private service: ProprietarioService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Proprietario>{
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }

    return of({});
  }
}
