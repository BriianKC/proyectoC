import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniClientesComponent } from './ini-clientes.component';

describe('IniClientesComponent', () => {
  let component: IniClientesComponent;
  let fixture: ComponentFixture<IniClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
