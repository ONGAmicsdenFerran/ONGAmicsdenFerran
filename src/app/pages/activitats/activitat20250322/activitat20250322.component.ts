import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20250322',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './activitat20250322.component.html',
  styleUrl: './activitat20250322.component.scss'
})
export class Activitat20250322Component {
  title = "Migas Solidàries per Sam Sam"
}
