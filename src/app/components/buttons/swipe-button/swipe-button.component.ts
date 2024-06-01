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
  currentOption: string = 'Plazo';

  constructor(private router: Router, private location: Location) {}

  toggleOption() {
    const currentPath = this.location.path(false); // Get sanitized path
    const navigateTo = currentPath === '/producto' ? '/plazo' : '/producto';

    this.router.navigate([navigateTo]);
    this.currentOption = navigateTo === '/producto' ? 'Productos' : 'Plazo'; // Update text based on navigation
  }
}
