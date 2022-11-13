import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPropietarioVehiculoComponent } from './crud-propietario-vehiculo.component';

describe('CrudPropietarioVehiculoComponent', () => {
  let component: CrudPropietarioVehiculoComponent;
  let fixture: ComponentFixture<CrudPropietarioVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPropietarioVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPropietarioVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
