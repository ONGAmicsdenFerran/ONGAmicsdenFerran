import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20220507',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20220507.component.html',
  styleUrl: './activitat20220507.component.scss'
})
export class Activitat20220507Component {
  title = "Festival de Música i Humor per Sam Sam"
}
