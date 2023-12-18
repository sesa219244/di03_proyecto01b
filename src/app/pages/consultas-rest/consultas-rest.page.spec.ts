import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultasRestPage } from './consultas-rest.page';

describe('ConsultasRestPage', () => {
  let component: ConsultasRestPage;
  let fixture: ComponentFixture<ConsultasRestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultasRestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
