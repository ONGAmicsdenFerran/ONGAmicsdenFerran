import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutusComponent} from "./pages/aboutus/aboutus.component";
import {ActivitatsComponent} from "./pages/activitats/activitats.component";
import {ContacteComponent} from "./pages/contacte/contacte.component";
import {ElprojecteComponent} from "./pages/elprojecte/elprojecte.component";
import {GaleriaComponent} from "./pages/galeria/galeria.component";
import {QuiesenferranComponent} from "./pages/quiesenferran/quiesenferran.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'elprojecte', component: ElprojecteComponent },
  { path: 'activitats', component: ActivitatsComponent },
  { path: 'quiesenferran', component: QuiesenferranComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacte', component: ContacteComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**/*', redirectTo: 'home'}
];
