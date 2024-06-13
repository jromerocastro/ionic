import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearComentarioPage } from './crear-comentario.page';

describe('CrearComentarioPage', () => {
  let component: CrearComentarioPage;
  let fixture: ComponentFixture<CrearComentarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearComentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
