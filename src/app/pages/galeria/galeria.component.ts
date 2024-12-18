import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-galeria',
  standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        RouterLink
    ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  title = "Galeria"
}
