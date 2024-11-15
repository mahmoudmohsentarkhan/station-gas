import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'sation-filter',
  standalone: true,
  imports: [MatIconModule,MatCheckboxModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit{
  @Output() filter:EventEmitter<number[]>;
  showProperties = false;
  filterSelection:number[]= [1,2,3,4,5,6];
  properties = [
    {id:1, label:'total sales', selected:true},
    {id:2, label:'compressor status', selected:true},
    {id:3, label:'max transaction count per hour', selected:true},
    {id:4, label:'total value', selected:true},
    {id:5, label:'total transaction', selected:true},
    {id:6, label:'max transaction count date-time', selected:true},
  ];
  constructor(){
    this.filter = new EventEmitter<number[]>()
  }

  ngOnInit(): void {
    this.filter.emit(this.filterSelection)

  }
  select(id: number) {
    const index = this.properties.findIndex((prop) => prop.id === id);
    if (index !== -1) {
      this.properties[index].selected = !this.properties[index].selected;
      if (this.properties[index].selected) {
        this.filterSelection.push(id);
      } else {
        this.filterSelection = this.filterSelection.filter((selectedId) => selectedId !== id);
      }
      this.filter.emit(this.filterSelection);
    }
  }
}
