import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20230415',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20230415.component.html',
  styleUrl: './activitat20230415.component.scss'
})
export class Activitat20230415Component {
  title = "Homenaje a Santi Caballero"
}
