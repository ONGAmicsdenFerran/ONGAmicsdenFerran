import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20251129',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './activitat20251129.component.html',
  styleUrl: './activitat20251129.component.scss'
})
export class Activitat20251129Component {
  title = "Teatre Solidari · Sala d'espera · Fem Teatre Fem"
}
