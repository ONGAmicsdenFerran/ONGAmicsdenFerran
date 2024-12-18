import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20240413',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20240413.component.html',
  styleUrl: './activitat20240413.component.scss'
})
export class Activitat20240413Component {
  title = "Ballada Country Solidària · Country Matadepera"
}
