import { Component } from '@angular/core';
import { FilterComponent } from "./filter/filter.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'card-station',
  standalone: true,
  imports: [FilterComponent,NgClass],
  templateUrl: './card-station.component.html',
  styleUrl: './card-station.component.scss'
})
export class CardStationComponent {
  //can use pipe CurrencyPipe, DecimalPipe and DatePipe
  properties = [
    {id:1, label:'total sales', value:'62,721 m³'},
    {id:2, label:'compression state', value:'compression'},
    {id:3, label:'max transaction/hour', value:20},
    {id:4, label:'total value', value:'550 EGP'},
    {id:5, label:'total transaction count', value:5161},
    {id:6, label:'max transaction date-time', value:'8-1-2021 | 10:16 PM'},
  ];

  filters:number[] = []

  filter(val:number[]){
    this.filters = val;
  }
}
