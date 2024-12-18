import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20221022',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20221022.component.html',
  styleUrl: './activitat20221022.component.scss'
})
export class Activitat20221022Component {
  title = "Concert Solidari · Grup PANELA"
}
