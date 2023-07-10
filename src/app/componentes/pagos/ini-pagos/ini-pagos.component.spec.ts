import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniPagosComponent } from './ini-pagos.component';

describe('IniPagosComponent', () => {
  let component: IniPagosComponent;
  let fixture: ComponentFixture<IniPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniPagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
