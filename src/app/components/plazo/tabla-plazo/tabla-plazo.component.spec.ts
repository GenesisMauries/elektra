import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPlazoComponent } from './tabla-plazo.component';

describe('TablaPlazoComponent', () => {
  let component: TablaPlazoComponent;
  let fixture: ComponentFixture<TablaPlazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPlazoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
