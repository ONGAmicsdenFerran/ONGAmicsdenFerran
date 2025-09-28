import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20251010',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './activitat20251010.component.html',
  styleUrl: './activitat20251010.component.scss'
})
export class Activitat20251010Component {
  title = "Sam Sam Festival 2025"
}
