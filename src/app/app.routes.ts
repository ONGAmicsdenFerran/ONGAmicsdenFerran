import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutusComponent} from "./pages/aboutus/aboutus.component";
import {ActivitatsComponent} from "./pages/activitats/activitats.component";
import {ContacteComponent} from "./pages/contacte/contacte.component";
import {ElprojecteComponent} from "./pages/elprojecte/elprojecte.component";
import {GaleriaComponent} from "./pages/galeria/galeria.component";
import {QuiesenferranComponent} from "./pages/quiesenferran/quiesenferran.component";
import {Activitat20211120Component} from "./pages/activitats/activitat20211120/activitat20211120.component";
import {Activitat20220402Component} from "./pages/activitats/activitat20220402/activitat20220402.component";
import {Activitat20220507Component} from "./pages/activitats/activitat20220507/activitat20220507.component";
import {Activitat20220528Component} from "./pages/activitats/activitat20220528/activitat20220528.component";
import {Activitat20220529Component} from "./pages/activitats/activitat20220529/activitat20220529.component";
import {Activitat20221022Component} from "./pages/activitats/activitat20221022/activitat20221022.component";
import {Activitat20221126Component} from "./pages/activitats/activitat20221126/activitat20221126.component";
import {Activitat20230415Component} from "./pages/activitats/activitat20230415/activitat20230415.component";
import {Activitat20230528Component} from "./pages/activitats/activitat20230528/activitat20230528.component";
import {Activitat20230909Component} from "./pages/activitats/activitat20230909/activitat20230909.component";
import {Activitat20231125Component} from "./pages/activitats/activitat20231125/activitat20231125.component";
import {Activitat20231202Component} from "./pages/activitats/activitat20231202/activitat20231202.component";
import {Activitat20240224Component} from "./pages/activitats/activitat20240224/activitat20240224.component";
import {Activitat20240413Component} from "./pages/activitats/activitat20240413/activitat20240413.component";
import {Activitat20240525Component} from "./pages/activitats/activitat20240525/activitat20240525.component";
import {Activitat20240602Component} from "./pages/activitats/activitat20240602/activitat20240602.component";
import {
  Activitatcolonies20212022Component
} from "./pages/activitats/activitatcolonies20212022/activitatcolonies20212022.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'elprojecte', component: ElprojecteComponent },
  { path: 'activitats', component: ActivitatsComponent },
  { path: 'quiesenferran', component: QuiesenferranComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacte', component: ContacteComponent },
  { path: 'aboutus', component: AboutusComponent },

  { path: 'activitat20211120', component: Activitat20211120Component },
  { path: 'activitat20220209', component: Activitat20220402Component },
  { path: 'activitat20220402', component: Activitat20220402Component },
  { path: 'activitat20220507', component: Activitat20220507Component },
  { path: 'activitat20220528', component: Activitat20220528Component },
  { path: 'activitat20220529', component: Activitat20220529Component },
  { path: 'activitat20221022', component: Activitat20221022Component },
  { path: 'activitat20221126', component: Activitat20221126Component },
  { path: 'activitat20230415', component: Activitat20230415Component },
  { path: 'activitat20230528', component: Activitat20230528Component },
  { path: 'activitat20230909', component: Activitat20230909Component },
  { path: 'activitat20231125', component: Activitat20231125Component },
  { path: 'activitat20231202', component: Activitat20231202Component },
  { path: 'activitat20240224', component: Activitat20240224Component },
  { path: 'activitat20240413', component: Activitat20240413Component },
  { path: 'activitat20240525', component: Activitat20240525Component },
  { path: 'activitat20240602', component: Activitat20240602Component },
  { path: 'activitatcolonies20212022', component: Activitatcolonies20212022Component },

  { path: '**/*', redirectTo: 'home'}
];
