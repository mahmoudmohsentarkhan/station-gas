import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  colors: string[];
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'graph',
  standalone: true,
  imports: [NgApexchartsModule,NgClass],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})

export class GraphComponent {
  chartOptions: ChartOptions;
  currentDate='sales'
  constructor() {
    this.chartOptions = {
      series: [
        {
          data:[260, 140, 210, 225, 150]
        }

      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar:{
          show:false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "10px",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
      },
      xaxis: {
        categories: [
          "Station Name Dummy 1",
          "Station Name Dummy 2",
          "Station Name Dummy 3",
          "Station Name Dummy 4",
          "Station Name Dummy 5",
        ],
        labels: {
          style: {
            colors: '#3D5161',
            fontSize: '10px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
          }
        }
      },
      colors: ['#ff7f5c'],
      fill: {
        opacity: 1,
      },
      legend:{},
      tooltip: {
        enabled:false
      }
    };
  }

  transactionData() {
    if(this.currentDate != 'transaction'){
      this.currentDate = 'transaction'
      this.updateDate([100, 150, 140, 200, 250],'#00cbc0')
    }
  }

  salesData() {
    if(this.currentDate != 'sales'){
      this.currentDate = 'sales'
      this.updateDate([260, 140, 210, 225, 150],'#ff7f5c')
    }
  }
  valueData(){
    if(this.currentDate != 'value'){
      this.currentDate = 'value'
      this.updateDate([300, 160, 160, 175, 200],'#5ebcdc')
    }
  }
  compressionData(){
    if(this.currentDate != 'compression'){
      this.currentDate = 'compression'
     this.updateDate([250, 180, 180, 250, 100],'#ba1a1a')
    }
  }

  private updateDate(data:number[],color:string){
    this.chartOptions = {
      ...this.chartOptions,
      colors:[color],
      series: [
        {
          data: data
        },
      ],
    };
  }
}

