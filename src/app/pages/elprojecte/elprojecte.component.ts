import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-elprojecte',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage
  ],
  templateUrl: './elprojecte.component.html',
  styleUrl: './elprojecte.component.scss'
})
export class ElprojecteComponent {
  title = "El projecte"
}
