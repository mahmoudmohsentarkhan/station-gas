import { Component } from '@angular/core';
import { ProgressStationComponent } from '@app/shared/dahsboard';

@Component({
  selector: 'sales-by-station',
  standalone: true,
  imports: [ProgressStationComponent],
  templateUrl: './sales-by-station.component.html',
  styleUrl: './sales-by-station.component.scss'
})
export class SalesByStationComponent {

}
