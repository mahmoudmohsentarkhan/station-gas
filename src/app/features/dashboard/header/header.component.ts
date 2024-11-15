import { Component } from '@angular/core';
import * as _ from '@app/shared/dahsboard'

@Component({
  selector: 'dashboard-header',
  standalone: true,
  imports: [_.NavComponent, _.BtnInfoComponent, _.TimePickerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
