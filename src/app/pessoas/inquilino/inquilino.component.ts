import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { Inquilino } from './inquilino';
import { InquilinoService } from './inquilino.service';

@Component({
  selector: 'app-inquilino',
  templateUrl: './inquilino.component.html',
  styleUrls: ['./inquilino.component.css']
})
export class InquilinoComponent implements OnInit {

  inquilinos?: any;
  inquilinos$?: Observable<any>
  error$ = new Subject<boolean>();
  bsModalRef?: BsModalRef;

  constructor(private inquilinoService: InquilinoService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    //this.inquilinoService.getInquilinos()
    //.subscribe(dados => this.inquilinos = dados);
    this.inquilinos$ = this.inquilinoService.getInquilinos()
    .pipe(
      catchError(error => {
        //this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  }

}
