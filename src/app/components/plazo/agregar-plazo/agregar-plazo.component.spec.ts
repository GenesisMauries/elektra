import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPlazoComponent } from './agregar-plazo.component';

describe('AgregarPlazoComponent', () => {
  let component: AgregarPlazoComponent;
  let fixture: ComponentFixture<AgregarPlazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPlazoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
