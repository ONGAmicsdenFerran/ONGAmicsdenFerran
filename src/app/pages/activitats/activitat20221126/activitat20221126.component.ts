import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-activitat20221126',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './activitat20221126.component.html',
  styleUrl: './activitat20221126.component.scss'
})
export class Activitat20221126Component {
  title = "Teatre Solidari · Silenci... Es vota · Anna Bitrià Navarro i Carme Dencàs Auret"
}
