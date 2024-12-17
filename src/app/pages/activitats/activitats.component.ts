import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-activitats',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './activitats.component.html',
  styleUrl: './activitats.component.scss'
})
export class ActivitatsComponent {

}
