import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitatcolonies20212022',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitatcolonies20212022.component.html',
  styleUrl: './activitatcolonies20212022.component.scss'
})
export class Activitatcolonies20212022Component {
  title = "Colònies 2021 - 2022"
}
