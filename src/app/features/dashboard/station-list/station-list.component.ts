import { Component, effect, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgClass, NgComponentOutlet} from '@angular/common';
import { GraphComponent, ListComponent } from '@app/shared/dahsboard';

@Component({
  selector: 'station-list',
  standalone: true,
  imports: [MatIcon,NgComponentOutlet,NgClass],
  templateUrl: './station-list.component.html',
  styleUrl: './station-list.component.scss',
})
export class StationListComponent {
  currentCompnent = ListComponent
  toggle = signal<boolean>(true)
  showGraph(){
    if(!this.toggle()){
      this.toggle.set(true);
      this.currentCompnent = ListComponent
    }
  }

  showList(){
    if(this.toggle()){
      this.toggle.set(false);
      this.currentCompnent = GraphComponent
    }
  }
}
