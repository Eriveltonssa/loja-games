import { Component } from '@angular/core';

//importação Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatGridListModule,MatButtonModule,MatCardModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
