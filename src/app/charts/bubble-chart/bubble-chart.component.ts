import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})


export class BubbleChartComponent implements OnInit, OnChanges {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() xAxes = [{
    ticks: {
      min: 0,
      max: 70,
    }
  }];
  @Input() yAxes = [{
    ticks: {
      min: 0,
      max: 100,
    }
  }];

  @Input() label: string = '';

  public bubbleChartColors: any;
  public bubbleChartOptions: ChartOptions = {};
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  public bubbleChartLabels: Label[] = ['1', '2', '3', '4'];
  public bubbleChartData: ChartDataSets[] = [];

  constructor() {}

  ngOnInit() {
    this.bubbleChartData = [{
      data: [
        { x: this.x, y: this.y, r: 6 },
      ],
      label: this.label,
    }];

    this.bubbleChartOptions = {
      responsive: true,
      scales: {
        xAxes: this.xAxes,
        yAxes: this.yAxes,
      }
    };
  }


  ngOnChanges(): void {
    this.bubbleChartData = [{
      data: [
        { x: this.x, y: this.y, r: 6 },
      ],
      label: this.label,
    }];

    this.bubbleChartOptions = {
      responsive: true,
      scales: {
        xAxes: this.xAxes,
        yAxes: this.yAxes,
      }
    };
  }
}


