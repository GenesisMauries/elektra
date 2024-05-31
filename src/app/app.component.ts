import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwipeButtonComponent } from "./components/buttons/swipe-button/swipe-button.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SwipeButtonComponent]
})
export class AppComponent {
  title = 'elektra';
}
