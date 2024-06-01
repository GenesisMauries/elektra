import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto/producto.component';
import { PlazoComponent } from './components/plazo/plazo/plazo.component';

export const routes: Routes = [{path: '', redirectTo: 'plazo', pathMatch: 'full',},
{ path: 'producto', component: ProductoComponent }, {path: 'plazo', component: PlazoComponent}];
