import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-contacte',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './contacte.component.html',
  styleUrl: './contacte.component.scss'
})
export class ContacteComponent {
  title = "Contacte"
}
