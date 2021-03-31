import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})

export class BubbleChartComponent {
  public bubbleChartColors: any;
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 5,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 5,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  public bubbleChartLabels: Label[] = ['1', '2', '3', '4'];
  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 2, y: 2, r: 6 },
      ],
      label: 'I1',
    },
  ];

}
