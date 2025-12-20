import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20251221',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './activitat20251221.component.html',
  styleUrl: './activitat20251221.component.scss'
})
export class Activitat20251221Component {
  title = "Dinar Nadalenc Solidari per Sam Sam"
}
