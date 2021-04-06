import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})


export class BubbleChartComponent implements OnInit {
  @Input() x: number = 0;
  @Input() y: {im: number, re: number};
  constructor() {}

  ngOnInit() {

    // this.calc.ngOnInit();
    // console.log('x', this.calc.angle);
    // console.log('y', this.calc.i1Result);
    this.bubbleChartData = [{
      data: [
        { x: this.x, y: this.y.re, r: 6 },
      ],
      label: 'I1',
    }]
  }

  public bubbleChartColors: any;
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 70,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 0.8,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  public bubbleChartLabels: Label[] = ['1', '2', '3', '4'];
  public bubbleChartData: ChartDataSets[] = [];


}


