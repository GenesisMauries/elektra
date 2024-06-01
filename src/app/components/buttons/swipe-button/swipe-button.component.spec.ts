import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { SwipeButtonComponent } from './swipe-button.component';

describe('SwipeButtonComponent', () => {
  let component: SwipeButtonComponent;
  let fixture: ComponentFixture<SwipeButtonComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwipeButtonComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeButtonComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inject Router instance
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
