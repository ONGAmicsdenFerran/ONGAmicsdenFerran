import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20260927',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './activitat20260927.component.html',
  styleUrl: './activitat20260927.component.scss'
})
export class Activitat20260927Component {
  title = "Caminada Solidària 2026"
}
