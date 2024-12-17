import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-contacte',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './contacte.component.html',
  styleUrl: './contacte.component.scss'
})
export class ContacteComponent {
  title = "Contacte"
}
