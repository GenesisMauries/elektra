import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Plazo } from '../interfaces/plazo.interface';

@Injectable({
  providedIn: 'root'
})
export class PlazoService {

  private baseUrl = 'http://localhost:8080/plazos';

  constructor(private apiService: ApiService) { }

  getAllPlazo(): Observable<Plazo[]> {
    return this.apiService.get<Plazo[]>(`${this.baseUrl}/todos`);
  }

  addPlazo(plazo: Plazo): Observable<Plazo> {
    return this.apiService.post<Plazo>(`${this.baseUrl}/crear`, plazo, );
  }
  deletePlazo(id: number): Observable<Plazo> {
    console.log(id);

    return this.apiService.delete(`${this.baseUrl}/eliminar/${id}`)
  }
}
