import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private apiService: ApiService) { }

  private baseUrl = 'http://localhost:8080/productos';

  getAllProducto(): Observable<Producto[]> {
    return this.apiService.get<Producto[]>(`${this.baseUrl}`);
  }

  addProducto(producto: Producto): Observable<Producto> {
    return this.apiService.post<Producto>(`${this.baseUrl}/crear`, producto, );
  }

  deleteProducto(id: number): Observable<Producto> {
    console.log(id);

    return this.apiService.delete(`${this.baseUrl}/eliminar/${id}`)
  }
}
