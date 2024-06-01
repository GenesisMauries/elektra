import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Plazo } from '../../../interfaces/plazo.interface';

@Component({
  selector: 'app-tabla-plazo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-plazo.component.html',
  styleUrl: './tabla-plazo.component.css'
})
export class TablaPlazoComponent {
  @Input() plazos: Plazo[] = [];
}
