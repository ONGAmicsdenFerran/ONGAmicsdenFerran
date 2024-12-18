import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20240224',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20240224.component.html',
  styleUrl: './activitat20240224.component.scss'
})
export class Activitat20240224Component {
  title = "Migas Solidàries"
}
