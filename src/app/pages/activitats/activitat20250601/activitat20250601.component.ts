import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20250601',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './activitat20250601.component.html',
  styleUrl: './activitat20250601.component.scss'
})
export class Activitat20250601Component {
  title = "Caminada Solidària 2025"
}
