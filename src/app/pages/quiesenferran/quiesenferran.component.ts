import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-quiesenferran',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './quiesenferran.component.html',
  styleUrl: './quiesenferran.component.scss'
})
export class QuiesenferranComponent {
  title = "Qui és en Ferran"
}
