import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20220209',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20220209.component.html',
  styleUrl: './activitat20220209.component.scss'
})
export class Activitat20220209Component {
  title = "Pintura Solidària · Obres de l'Artista Joan Sala"
}
