import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaDadosPage } from './tela-dados.page';

describe('TelaDadosPage', () => {
  let component: TelaDadosPage;
  let fixture: ComponentFixture<TelaDadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
