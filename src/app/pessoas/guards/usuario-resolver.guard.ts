import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { of, Observable } from 'rxjs';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolverGuard implements Resolve<Usuario> {
  
  constructor(private service: UsuarioService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Usuario | Observable<Usuario>{
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }

    return of({
    });
  }
  
}
