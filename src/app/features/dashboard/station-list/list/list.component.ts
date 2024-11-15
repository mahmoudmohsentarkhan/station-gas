import { Component } from '@angular/core';
import { CardStationComponent } from "./card-station/card-station.component";

@Component({
  selector: 'list',
  standalone: true,
  imports: [CardStationComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
