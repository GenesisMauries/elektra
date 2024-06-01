import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plazo } from '../../../interfaces/plazo.interface';
import { PlazoService } from '../../../services/plazo.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tabla-plazo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-plazo.component.html',
  styleUrl: './tabla-plazo.component.css'
})
export class TablaPlazoComponent {

  constructor(private plazoService: PlazoService, private toastr: ToastrService){}

  @Input() plazos: Plazo[] = [];
  @Output() plazoEliminado: EventEmitter<void> = new EventEmitter<void>();

  eliminarPlazo(plazo: any): void {
    this.plazoService.deletePlazo(plazo.id).subscribe(() => {
      this.toastr.success('¡Plazo eliminado!', 'Ok');
      this.plazoEliminado.emit();
    });
  }


}
