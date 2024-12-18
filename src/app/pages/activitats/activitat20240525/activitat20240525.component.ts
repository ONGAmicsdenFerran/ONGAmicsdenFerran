import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20240525',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20240525.component.html',
  styleUrl: './activitat20240525.component.scss'
})
export class Activitat20240525Component {
  title = "Teatre Solidari · Cuéntame un Cuento · Dones d'Egara"
}
