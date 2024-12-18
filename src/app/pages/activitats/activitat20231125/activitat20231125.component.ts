import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20231125',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20231125.component.html',
  styleUrl: './activitat20231125.component.scss'
})
export class Activitat20231125Component {
  title = "Teatre Solidari · Se Casa el Nipi con la Juani · Elías Torres"
}
