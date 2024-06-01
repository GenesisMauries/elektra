import { Component } from '@angular/core';
import { PlazoService } from '../../../services/plazo.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-plazo',
  standalone: true,
  imports: [],
  templateUrl: './plazo.component.html',
  styleUrl: './plazo.component.css'
})
export class PlazoComponent {
  constructor(private plazoService: PlazoService, private apiService: ApiService) { } // Inject ApiService

  ngOnInit(): void {
    this.plazoService.getAllPlazo();
  }
}
