import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgregarPlazoComponent } from '../agregar-plazo/agregar-plazo.component';
import { TablaPlazoComponent } from '../tabla-plazo/tabla-plazo.component';
import { PlazoService } from '../../../services/plazo.service';
import { Plazo } from '../../../interfaces/plazo.interface';

@Component({
  selector: 'app-plazo',
  standalone: true,
  imports: [FormsModule, CommonModule,AgregarPlazoComponent,TablaPlazoComponent],
  templateUrl: './plazo.component.html',
  styleUrl: './plazo.component.css'
})
export class PlazoComponent {
  plazos: Plazo[] = [];

  constructor(private plazoService: PlazoService) { }

  ngOnInit(): void {
    this.actualizarPlazos(); // Actualizar plazos cuando se inicializa el componente
  }

  actualizarPlazos(): void {
    this.plazoService.getAllPlazo().subscribe((data: Plazo[]) => {
      this.plazos = data;
    });
  }

}
