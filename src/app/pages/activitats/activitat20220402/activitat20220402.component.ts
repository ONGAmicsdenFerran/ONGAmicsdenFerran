import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20220402',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20220402.component.html',
  styleUrl: './activitat20220402.component.scss'
})
export class Activitat20220402Component {
  title = "Teatre Solidari · ¡Viva la Nuit! · -ES"
}
