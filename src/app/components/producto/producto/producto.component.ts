import { Component } from '@angular/core';
import { AgregarProductoComponent } from '../agregar-producto/agregar-producto.component';
import { TablaProductoComponent } from '../tabla-producto/tabla-producto.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../interfaces/producto.interface';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [AgregarProductoComponent, TablaProductoComponent, CommonModule, FormsModule],
  templateUrl: './producto.component.html',
})
export class ProductoComponent {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.actualizarProductos(); // Actualizar plazos cuando se inicializa el componente
  }

  actualizarProductos(): void {
    this.productoService.getAllProducto().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }
}
