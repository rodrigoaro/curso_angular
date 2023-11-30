import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenadaComponent } from './lista-ordenada.component';

describe('ListaOrdenadaComponent', () => {
  let component: ListaOrdenadaComponent;
  let fixture: ComponentFixture<ListaOrdenadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaOrdenadaComponent]
    });
    fixture = TestBed.createComponent(ListaOrdenadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
