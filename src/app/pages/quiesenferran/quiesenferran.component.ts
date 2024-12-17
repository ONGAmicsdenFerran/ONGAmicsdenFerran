import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-quiesenferran',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './quiesenferran.component.html',
  styleUrl: './quiesenferran.component.scss'
})
export class QuiesenferranComponent {
  title = "Qui és en Ferran"
}
