import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazoComponent } from './plazo.component';

describe('PlazoComponent', () => {
  let component: PlazoComponent;
  let fixture: ComponentFixture<PlazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlazoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
