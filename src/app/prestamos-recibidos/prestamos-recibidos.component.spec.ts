import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosRecibidosComponent } from './prestamos-recibidos.component';

describe('PrestamosRecibidosComponent', () => {
  let component: PrestamosRecibidosComponent;
  let fixture: ComponentFixture<PrestamosRecibidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestamosRecibidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestamosRecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
