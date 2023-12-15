import { Component } from '@angular/core';
//importação Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatGridListModule],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.scss'
})
export class RodapeComponent {

}
