import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { StatisticCardComponent } from '@app/shared/dahsboard';

@Component({
  selector: 'statistics-overview',
  standalone: true,
  imports: [StatisticCardComponent,NgClass ],
  templateUrl: './station-overview.component.html',
  styleUrl: './station-overview.component.scss'
})
export class StationOverviewComponent {
  dataList = [
    {val:71028,sympol:'EGP',label:'total value', unit:'2%',isDcrease:true},
    {val:20000,sympol:'m³',label: 'total sales',unit:'50 m³'},
    {val:20000,sympol:'m³',label: 'avg sales',unit:'50 m³',isDcrease:true},
    {val:1567,sympol:'',label: 'total transaction count',unit:'20'}
  ]
}
