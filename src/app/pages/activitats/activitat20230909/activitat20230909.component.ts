import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20230909',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20230909.component.html',
  styleUrl: './activitat20230909.component.scss'
})
export class Activitat20230909Component {
  title = "Trobada Solidària per Sam Sam i Botifarrada"
}
