import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-collabora',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './collabora.component.html',
  styleUrl: './collabora.component.scss'
})
export class CollaboraComponent {
  title = "Col·labora"
}
