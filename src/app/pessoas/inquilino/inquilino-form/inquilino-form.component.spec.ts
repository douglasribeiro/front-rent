import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquilinoFormComponent } from './inquilino-form.component';

describe('InquilinoFormComponent', () => {
  let component: InquilinoFormComponent;
  let fixture: ComponentFixture<InquilinoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquilinoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InquilinoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
