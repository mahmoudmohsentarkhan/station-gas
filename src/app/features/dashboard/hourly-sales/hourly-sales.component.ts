import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers,
  NgApexchartsModule,
  ApexTooltip,
  ApexLegend,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  colors:string[],
  yaxis: ApexYAxis;
  legend:ApexLegend,
};
@Component({
  selector: 'hourly-sales',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './hourly-sales.component.html',
  styleUrl: './hourly-sales.component.scss'
})
export class HourlySalesComponent {
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [12, 16, 18, 14, 6, 8, 10,14, 16, 18, 20, 22]
        },
        {
          data: [14, 10, 12, 18, 20, 22, 18, 16, 14, 12, 10, 8]
        }
      ],
      chart: {
        height: 350,
        type: "radar",
        width:'250',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        },
        toolbar:{
          show:false
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2,
        fill:{
          opacity:1
        }
      },
      colors:['#59bbdc','#49d8cf'],
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["02", "04", "06", "08", "10", "12","14","16","18","20","22","24"],
        axisBorder:{
          show:false
        }
      },
      yaxis: {
        show: false,
      },
      legend:{
        show:false
      }
    };
  }
}
//
