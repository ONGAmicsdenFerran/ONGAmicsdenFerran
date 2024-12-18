import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20211120',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20211120.component.html',
  styleUrl: './activitat20211120.component.scss'
})
export class Activitat20211120Component {
  title = "Teatre Solidari · Prohibido Suicidarse Mañana · Associació de Teatre Mú"
}
