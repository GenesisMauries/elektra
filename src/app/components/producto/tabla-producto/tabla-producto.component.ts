import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../../interfaces/producto.interface';


@Component({
  selector: 'app-tabla-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-producto.component.html',
  styleUrl: './tabla-producto.component.css'
})
export class TablaProductoComponent {
  constructor(private productoService: ProductoService, private toastr: ToastrService){}

  @Input() productos: Producto[] = [];
  @Output() productoEliminado: EventEmitter<void> = new EventEmitter<void>();

  eliminarProducto(producto: any): void {
    this.productoService.deleteProducto(producto.id).subscribe(() => {
      this.toastr.success('¡Producto eliminado!', 'Ok');
      this.productoEliminado.emit();
    });
  }

  editarProducto(producto: Producto) {
    console.log(producto);

  }
}
