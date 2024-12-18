import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20231202',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20231202.component.html',
  styleUrl: './activitat20231202.component.scss'
})
export class Activitat20231202Component {
  title = "Pablo Gómez en Estat Pur"
}
