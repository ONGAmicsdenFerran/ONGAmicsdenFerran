import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-elprojecte',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './elprojecte.component.html',
  styleUrl: './elprojecte.component.scss'
})
export class ElprojecteComponent {
  title = "El projecte"
}
