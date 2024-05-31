import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto/producto.component';
import { PlazoComponent } from './components/plazo/plazo/plazo.component';

export const routes: Routes = [{ path: 'plazo', component: PlazoComponent },
{ path: 'producto', component: ProductoComponent }];
