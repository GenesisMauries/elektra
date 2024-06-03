import { Component, EventEmitter, Output } from '@angular/core';
import { Plazo } from '../../../interfaces/plazo.interface';
import { PlazoService } from '../../../services/plazo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-agregar-plazo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar-plazo.component.html',
  styleUrl: './agregar-plazo.component.css'
})
export class AgregarPlazoComponent {
  nuevoPlazo: Plazo = { semanas: 0, tasaNormal: 0, tasaPuntual: 0 };

  @Output() plazoAgregado = new EventEmitter<void>();

  constructor(private plazoService: PlazoService, private toastr: ToastrService) { }

  agregarPlazo(event: Event): void {
    event.preventDefault();
    if (this.nuevoPlazo.semanas === 0 || this.nuevoPlazo.tasaNormal === 0 || this.nuevoPlazo.tasaPuntual === 0) {
      this.toastr.error('Debes capturar todos los plazos primero', 'Error');
      return;
    }
    this.plazoService.addPlazo(this.nuevoPlazo).subscribe(() => {
      console.log('Plazo agregado exitosamente');
      this.nuevoPlazo = { semanas: 0, tasaNormal: 0, tasaPuntual: 0 };
      this.plazoAgregado.emit();
      this.toastr.success('¡Plazo agregado exitosamente!', 'Ok');
    });
  }
}
