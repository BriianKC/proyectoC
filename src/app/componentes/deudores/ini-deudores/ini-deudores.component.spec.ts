import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniDeudoresComponent } from './ini-deudores.component';

describe('IniDeudoresComponent', () => {
  let component: IniDeudoresComponent;
  let fixture: ComponentFixture<IniDeudoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniDeudoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniDeudoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
