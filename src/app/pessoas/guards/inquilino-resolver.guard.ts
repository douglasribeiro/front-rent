import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Inquilino } from '../inquilino/inquilino';
import { InquilinoService } from '../inquilino/inquilino.service';

@Injectable({
  providedIn: 'root'
})
export class InquilinoResolverGuard implements Resolve<Inquilino> {

  constructor(private service: InquilinoService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Inquilino> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }

    return of({ });
  }
    
}
