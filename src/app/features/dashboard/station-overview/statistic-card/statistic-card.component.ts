import { DecimalPipe, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'statistic-card',
  standalone: true,
  imports: [NgClass, DecimalPipe],
  templateUrl: './statistic-card.component.html',
  styleUrl: './statistic-card.component.scss'
})
export class StatisticCardComponent {
  data = input.required<{val:number,sympol:string,label:string,unit:string,isDcrease?:boolean}>()
}
