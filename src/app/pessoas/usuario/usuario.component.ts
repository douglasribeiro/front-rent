import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/internal/Observable';
import { empty } from 'rxjs/internal/observable/empty';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  usuarios$: Observable<any>
  deleteModalRef: BsModalRef;
  usuarioSelecionado: Usuario;
  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private service: UsuarioService,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.usuarios$ = this.service.getrecords()
    .pipe(
      catchError(error => {
        //this.error$.next(true);
        this.handleError();
        return empty();
      })
    );

  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar usuario. Tente novamente mais tarde.');
  }

  onRefresh(){
    this.usuarios$ = this.service.getrecords().pipe(
      catchError(error => {
         console.error(error);
         this.handleError();
         return empty();
      })
    )
  }

  onEdit(id: number){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(usuario: any){
    console.log(usuario.id)
    this.usuarioSelecionado = usuario;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete() {
    this.service.remove(this.usuarioSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover usuario. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
