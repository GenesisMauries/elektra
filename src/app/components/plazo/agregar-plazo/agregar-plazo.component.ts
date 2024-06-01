import { Component, EventEmitter, Output } from '@angular/core';
import { Plazo } from '../../../interfaces/plazo.interface';
import { PlazoService } from '../../../services/plazo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-plazo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar-plazo.component.html',
  styleUrl: './agregar-plazo.component.css'
})
export class AgregarPlazoComponent {
  // nuevoPlazo: Plazo = { semanas: 0, tasaNormal: 0, tasaPuntual: 0 };

  // @Output() plazoAgregado = new EventEmitter<void>();

  // constructor(private plazoService: PlazoService) { }

  // agregarPlazo(event: Event): void {
  //   event.preventDefault();
  //   this.plazoService.addPlazo(this.nuevoPlazo).subscribe((res) => {
  //     console.log('Plazo agregado exitosamente:', res); // Log the successful response

  //     this.nuevoPlazo = { semanas: 0, tasaNormal: 0, tasaPuntual: 0 };
  //     this.plazoAgregado.emit(); // Emit event to indicate a new plazo has been added
  //   });
  // }
  nuevoPlazo: Plazo = { semanas: 0, tasaNormal: 0, tasaPuntual: 0 };

  @Output() plazoAgregado = new EventEmitter<void>();

  constructor(private plazoService: PlazoService) { }

  agregarPlazo(event: Event): void {
    event.preventDefault();
    this.plazoService.addPlazo(this.nuevoPlazo).subscribe(() => {
      console.log('Plazo agregado exitosamente');
      this.nuevoPlazo = { semanas: 0, tasaNormal: 0, tasaPuntual: 0 };
      this.plazoAgregado.emit(); // Emitir evento cuando se agrega un nuevo plazo
    });
  }
}
