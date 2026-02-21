import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutusComponent} from "./pages/aboutus/aboutus.component";
import {ActivitatsComponent} from "./pages/activitats/activitats.component";
import {ContacteComponent} from "./pages/contacte/contacte.component";
import {ElprojecteComponent} from "./pages/elprojecte/elprojecte.component";
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
} from "./pages/colonies/activitatcolonies20212022/activitatcolonies20212022.component";
import {Activitat20220209Component} from "./pages/activitats/activitat20220209/activitat20220209.component";
import {ColoniesComponent} from "./pages/colonies/colonies.component";
import {Activitat20250322Component} from "./pages/activitats/activitat20250322/activitat20250322.component";
import {Activitat20250601Component} from "./pages/activitats/activitat20250601/activitat20250601.component";
import {Activitat20250910Component} from "./pages/activitats/activitat20250910/activitat20250910.component";
import {Activitat20251010Component} from "./pages/activitats/activitat20251010/activitat20251010.component";
import {Activitat20251129Component} from "./pages/activitats/activitat20251129/activitat20251129.component";
import {Activitat20251221Component} from "./pages/activitats/activitat20251221/activitat20251221.component";
import {Activitat20260314Component} from "./pages/activitats/activitat20260314/activitat20260314.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'elprojecte', component: ElprojecteComponent },
  { path: 'colonies', component: ColoniesComponent },
  { path: 'quiesenferran', component: QuiesenferranComponent },
  { path: 'activitats', component: ActivitatsComponent },
  { path: 'contacte', component: ContacteComponent },
  { path: 'aboutus', component: AboutusComponent },

  { path: 'activitat20211120', component: Activitat20211120Component },
  { path: 'activitat20220209', component: Activitat20220209Component },
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
  { path: 'activitat20250322', component: Activitat20250322Component },
  { path: 'activitat20250601', component: Activitat20250601Component },
  { path: 'activitat20250910', component: Activitat20250910Component },
  { path: 'activitat20251010', component: Activitat20251010Component },
  { path: 'activitat20251129', component: Activitat20251129Component },
  { path: 'activitat20251221', component: Activitat20251221Component },
  { path: 'activitat20260314', component: Activitat20260314Component },

  { path: 'activitatcolonies20212022', component: Activitatcolonies20212022Component },

  { path: '**/*', redirectTo: 'home'}
];
