import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20260314',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './activitat20260314.component.html',
  styleUrl: './activitat20260314.component.scss'
})
export class Activitat20260314Component {
  title = "Migas Solidàries amb Sam Sam"
}
