import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PlazoService {
  constructor(private apiService: ApiService) { }

  getAllPlazo() {
    this.apiService.get('http://localhost:8080/plazos/todos')
      .subscribe(data => {
        console.log(data);
      });
  }
}
