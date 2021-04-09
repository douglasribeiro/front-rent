import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/internal/Observable';
import { empty } from 'rxjs/internal/observable/empty';
import { catchError, tap } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Proprietario } from './proprietario';
import { ProprietarioService } from './proprietario.service';

@Component({
  selector: 'app-proprietario',
  templateUrl: './proprietario.component.html',
  styleUrls: ['./proprietario.component.css']
})
export class ProprietarioComponent implements OnInit {

  proprietarios$: Observable<any>;
  prop: any;
  propSelecionado: Proprietario;
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;


  constructor(
    private service: ProprietarioService,
    private alertService: AlertModalService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.proprietarios$ = this.service.getrecords()
    .pipe(
      tap(x => this.prop = x),
      catchError(error => {
        //this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
    console.log(this.prop);
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar proprietarios. Tente novamente mais tarde.');
  }

  onRefresh(){
    this.proprietarios$ = this.service.getrecords().pipe(
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

  onDelete(proprietario: any){
    this.propSelecionado = proprietario;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }
  
  onConfirmDelete() {
    this.service.remove(this.propSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover proprietario. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
