import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../interfaces/producto.interface';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  @Input()
  producto!: Producto;
  @Output() productoEditado: EventEmitter<void> = new EventEmitter<void>();

  constructor(private productoService: ProductoService, private toastr: ToastrService) { }

  guardarCambios(): void {
    this.productoService.updateProducto(this.producto).subscribe(() => {
      this.toastr.success('¡Producto actualizado!', 'Ok');
      this.productoEditado.emit();
    });
  }
}
