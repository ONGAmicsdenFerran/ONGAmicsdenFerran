import { Component } from '@angular/core';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-colonies',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        RouterLink
    ],
  templateUrl: './colonies.component.html',
  styleUrl: './colonies.component.scss'
})
export class ColoniesComponent {
  title = "Colònies"
}
