import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Inquilino } from './inquilino';
import { Inquilino2Service } from './inquilino2.service';

@Component({
  selector: 'app-inquilino',
  templateUrl: './inquilino.component.html',
  styleUrls: ['./inquilino.component.css']
})
export class InquilinoComponent implements OnInit {

  inquilinos?: any;
  inquilinos$?: Observable<any>
  error$ = new Subject<boolean>();
  //bsModalRef?: BsModalRef;
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  inquilinoSelecionado: Inquilino;

  constructor(
    private inquilinoService: Inquilino2Service,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inquilinos$ = this.inquilinoService.getrecords()
    .pipe(
      catchError(error => {
        //this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  onEdit(id: number){
    this.router.navigate(['editar', id]);
  }
  
  onDelete(inquilino: any){
    this.inquilinoSelecionado = inquilino;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onRefresh(){
    this.inquilinos$ = this.inquilinoService.getrecords().pipe(
      catchError(error => {
         console.error(error);
         this.handleError();
         return empty();
      })
    )
  }

  onConfirmDelete() {
    this.inquilinoService.remove(this.inquilinoSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover inquilino. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
