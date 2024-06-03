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
})
export class PlazoComponent {
  plazos: Plazo[] = [];

  constructor(private plazoService: PlazoService) { }

  ngOnInit(): void {
    this.actualizarPlazos();
  }

  actualizarPlazos(): void {
    this.plazoService.getAllPlazo().subscribe((data: Plazo[]) => {
      this.plazos = data;
    },
    (error: string) => {
      console.error('There was an error!', error);
    });
  }

}
