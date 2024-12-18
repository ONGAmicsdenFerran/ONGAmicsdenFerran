import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20220528',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20220528.component.html',
  styleUrl: './activitat20220528.component.scss'
})
export class Activitat20220528Component {
  title = "Teatre Solidari · Melocotón en Almíbar · Sin Memoriam Teatre Band"
}
