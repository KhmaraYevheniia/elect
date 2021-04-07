import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, complex, add, multiply, floor, eval, fix, inv, matrix
} from 'mathjs'

@Component({
  selector: 'app-power-cyrcle-diagram',
  templateUrl: './power-cyrcle-diagram.component.html',
  styleUrls: ['./power-cyrcle-diagram.component.scss']
})
export class PowerCyrcleDiagramComponent implements OnInit {

  public u1 = 110;
  u2 = 115;
  angle = 50;
  rt1 = 1.3;
  xt1 = 85.2;
  rt2 = 1.8;
  xt2 = 90.3;
  rl = 1.2;
  xl = 7;
  bl = pow(10, -6);
  // public u1: number;
  // public u2: number;
  // public angle: number;
  // public rt1: number;
  // public xt1: number;
  // public rt2: number;
  // public xt2: number;
  // public rl: number;
  // public xl: number;
  // public bl: number;




  public radian = Math.PI / 180;
  public origin = '1';
  public u1Calc: string;
  public u2Calc: string;
  public zt1Calc: string;
  public zt2Calc: string;
  public zlCalc: string;
  public blCalc: string;
  public y11Calc: string;
  public y11Calc1: string;
  public y11Calc2: string;
  public y11Calc3: string;
  public y12Calc: string;
  public y21Calc: string;
  public y22Calc: string;
  public y22Calc1: string;
  public y22Calc2: string;
  public y22Calc3: string;
  public i11Calc: string;
  public i21Calc: string;
  public matrixY: string;
  public matrixI: {};
  public i1Result: {re: number; im: number};
  public i2Result: {re: number; im: number};
  public p1Result: number;
  public p2Result: number;
  public q1Result: number;
  public q2Result: number;
  public graphName1: string = 'I1';
  public graphName2: string = 'I2';
  public graphName3: string = 'P1';
  public graphName4: string = 'P2';
  public graphName5: string = 'Q1';
  public graphName6: string = 'Q2';
  public showCharts: boolean = false;

  public graph1Axes = {
    xAxes: [{
      ticks: {
        min: 0,
        max: 500,
      }
    }],
    yAxes: [{
      ticks: {
        min: -500,
        max: 500,
      }
    }]
  }

  constructor() { }

  ngOnInit(): void { }

  getColculation() {
    this.u1Calc = round(evaluate(`(${this.u1}) * (e^(0 * ${this.radian}))`));
    this.u2Calc = round(evaluate(`(${this.u2}) * (e^(${this.angle}*${this.radian}i))`), 3);
    this.zt1Calc = evaluate(`(${this.rt1}) + (${this.xt1})i`);
    this.zt2Calc = evaluate(`(${this.rt2}) + (${this.xt2})i`);
    this.zlCalc = evaluate(`(${this.rl}) + (${this.xl})i`);
    this.blCalc = evaluate(`(${this.bl})i`);
    console.log('bl ' , this.blCalc);


    this.y11Calc1 = evaluate(`(${this.origin}) / (${this.zt1Calc})`);
    this.y11Calc2 = evaluate(`(${this.blCalc}) / 2`);
    this.y11Calc3 = evaluate(`(${this.origin}) / (${this.zlCalc})`);
    this.y11Calc = complex(add(this.y11Calc1, this.y11Calc2, this.y11Calc3));

    this.y12Calc = evaluate(`-((${this.origin}) / (${this.zlCalc}))`);

    this.y21Calc = evaluate(`-((${this.origin}) / (${this.zlCalc}))`);

    this.y22Calc1 = evaluate(`(${this.origin}) / (${this.zt2Calc})`);
    this.y22Calc2 = evaluate(`(${this.blCalc}) / 2`);
    this.y22Calc3 = evaluate(`(${this.origin}) / (${this.zlCalc})`);
    this.y22Calc = complex(add(this.y22Calc1, this.y22Calc2, this.y22Calc3))

    this.i11Calc = floor(evaluate(`(${this.u1Calc}) / (${this.zt1Calc})`), 3);

    this.i21Calc = floor(evaluate(`(${this.u2Calc}) / (${this.zt2Calc})`), 3);

    this.matrixY = evaluate(`[[${this.y11Calc}, ${this.y12Calc}], [${this.y12Calc}, ${this.y11Calc}]]`);
    this.matrixI = [evaluate(`${this.i11Calc}`), evaluate(`${this.i21Calc}`)];
    const inverMatrix = inv(evaluate(`${ this.matrixY}`));
    const multMatrixCalc = multiply(inverMatrix, this.matrixI);

    const f11 = multMatrixCalc._data['0'];
    const f21 = multMatrixCalc._data['1'];

    this.i1Result = round(evaluate(`((${f11}) - (${this.u1Calc})) / (${this.zt1Calc})`),3);
    console.log('i1Result >> ', this.i1Result);

    this.i2Result = round(evaluate(`((${f21}) - (${this.u2Calc})) / (${this.zt2Calc})`), 3);

    console.log('i2Result >> ', this.i2Result);

    const s1Result = evaluate(`(sqrt(3)) * (${this.u1Calc}) * (${this.i1Result})`)

    const s2Result = evaluate(`(sqrt(3)) * (${this.u2Calc}) * (${this.i2Result})`)

    this.p1Result = round((s1Result.re), 3);
    console.log('p1 >> ', this.p1Result);

    this.q1Result = round((s1Result.im), 3);
    console.log('q1 >> ', this.q1Result);


    this.p2Result = round((s2Result.re), 3);
    console.log('p2 >> ', this.p2Result);

    this.q2Result = round((s2Result.im), 3);
    console.log('q2 >> ', this.q2Result);
  }

  getCharts() {
    this.showCharts = true;
  }


}
