import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-activitats',
  standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent
    ],
  templateUrl: './activitats.component.html',
  styleUrl: './activitats.component.scss'
})
export class ActivitatsComponent {
  title = "Activitats"
}
