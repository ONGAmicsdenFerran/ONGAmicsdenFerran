import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20230528',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20230528.component.html',
  styleUrl: './activitat20230528.component.scss'
})
export class Activitat20230528Component {
  title = "Passejada Solidària per Sam Sam 2023"
}
