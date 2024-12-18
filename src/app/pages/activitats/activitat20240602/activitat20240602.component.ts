import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20240602',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20240602.component.html',
  styleUrl: './activitat20240602.component.scss'
})
export class Activitat20240602Component {
  title = "Caminada Solidària · Melindros con Chocolate"
}
