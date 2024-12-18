import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20220529',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20220529.component.html',
  styleUrl: './activitat20220529.component.scss'
})
export class Activitat20220529Component {
  title = "Caminada Solidària · Festa Major les Arenes · Melindros con Chocolate"
}
