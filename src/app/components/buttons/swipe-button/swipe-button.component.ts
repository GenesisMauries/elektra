import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-swipe-button',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './swipe-button.component.html',
  styleUrl: './swipe-button.component.css'
})
export class SwipeButtonComponent {
  currentOption: string = 'Ir a productos';

  constructor(private router: Router, private location: Location) {}

  toggleOption() {
    const currentPath = this.location.path(false);
    const navigateTo = currentPath === '/producto' ? '/plazo' : '/producto';

    this.router.navigate([navigateTo]);
    this.currentOption = navigateTo === '/producto' ? ' ir a plazo': 'ir a productos' ;
  }
}
