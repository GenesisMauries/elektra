import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../interfaces/producto.interface';
import { ProductoService } from '../../../services/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  nuevoProducto: Producto = {
    id: 0,
    sku: '',
    nombre: '',
    precio: 0
  };

  @Output() productoAgregado = new EventEmitter<void>();

  constructor(private productoService: ProductoService, private toastr: ToastrService) { }

  agregarProducto(event: Event): void {
    event.preventDefault();
    if (this.nuevoProducto.sku === '' || this.nuevoProducto.nombre === '' || this.nuevoProducto.precio === 0) {
      this.toastr.error('Debes capturar todos los campos paraañadir un producto', 'Error');
      return;
    }
    this.productoService.addProducto(this.nuevoProducto).subscribe(() => {
      console.log('Producto agregado exitosamente');
      this.nuevoProducto = { id: 0,
        sku: '',
        nombre: '',
        precio: 0};
      this.productoAgregado.emit();
      this.toastr.success('¡Producto agregado exitosamente!', 'Ok');
    });
  }
}
