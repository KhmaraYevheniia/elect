import { Component, OnInit } from '@angular/core';
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
  rt1j = 1.3;
  xt1i = 85.2;
  rt2j = 1.8;
  xt2i = 90.3;
  rlj = 1.2;
  xli = 7;
  bli = 6;
  blj = pow(10, -6);

  radian = Math.PI / 180;
  public origin = '1';
  public u1Calc: any;
  public u2Calc: any;
  public zt1Calc: any;
  public zt2Calc: any;
  public zlCalc: any;
  public blCalc: any;
  public y11Calc: any;
  public y11Calc1: any;
  public y11Calc2: any;
  public y11Calc3: any;
  public y12Calc: any;
  public y21Calc: any;
  public y22Calc: any;
  public y22Calc1: any;
  public y22Calc2: any;
  public y22Calc3: any;
  public i11Calc: any;
  public i21Calc: any;
  public i21Calcj: any;
  public i11Calcj: any;
  public matrixY: any;
  public matrixI: any;
  public i1Result: any;
  public i2Result: any;


  u1Calculation() {
    // this.u1Calc = complex(multiply(this.u1, pow(e, 0 * this.radian)));
    this.u1Calc = '110 * e^(0*0.017)';
    console.log('u1 >> ', this.u1Calc);
  }

  u2Calculation() {
    // this.u2Calc = round(complex(this.u2, pow(e, this.angle* this.radian)), 2);
    this.u2Calc = round(evaluate(`115 * e^(50*${this.radian}i)`), 3);
    console.log('u2 >> ', this.u2Calc);
  }

  zt1Calculation() {
    // this.zt1Calc = complex(this.rt1j, this.xt1i);
    this.zt1Calc = `1.3 + 85.2i`;
    console.log('zt1 >> ', this.zt1Calc);

  }

  zt2Calculation() {
    // this.zt2Calc = complex(this.rt2j, this.xt2i);
    this.zt2Calc = evaluate(`1.8 + 90.3i`);
    console.log('zt2 >> ', this.zt2Calc);

  }

  zlCalculation() {
    // this.zlCalc = complex(this.rlj, this.xli);
    this.zlCalc = evaluate(`1.2 + 7i`);
    console.log('zl >> ', this.zlCalc);
  }

  blCalculation() {
    // this.blCalc = complex(this.blj, this.bli);
    this.blCalc = evaluate(`(6 * 10^-6)i`)
    console.log('bl >> ', this.blCalc);
  }

  y11Calculation() {
    // this.y11Calc1 = evaluate(`${this.origin} / ${this.zt1Calc}`);
    // this.y11Calc2 = evaluate(`${this.blCalc} / 2`);
    // this.y11Calc3 = evaluate(`${this.origin} / ${this.zlCalc}`);
    // this.y11Calc = complex(add(this.y11Calc1, this.y11Calc2, this.y11Calc3))
    this.y11Calc1 = round(evaluate(`${this.origin} / ${this.zt1Calc}`), 3);
    this.y11Calc2 = round(evaluate(`${this.blCalc} / 2`), 3);
    this.y11Calc3 = round(evaluate(`1 / 1.2 + 7i`),3);
    this.y11Calc = round(evaluate(`(1 / (1.3 + 85.2i)) + (((10^-6) * 6i) / 2) + (1 / (1.2 + 7i))`), 3);
    console.log('y11 >>', this.y11Calc);
    console.log('<1> >> ', this.y11Calc1);
    console.log('<2> >> ', this.y11Calc2);
    console.log('<3> >> ', this.y11Calc3);

  }

  y12Calculation() {
    this.y12Calc = round(evaluate(`(-1) / (1.2 + 7i)`), 3);
    console.log('y12 >>', this.y12Calc);
  }

  y21Calculation() {
    this.y21Calc = evaluate(`${-this.origin} / ${this.zlCalc}`)
    console.log('y21 >>', this.y21Calc);
  }

  y22Calculation() {
    this.y22Calc1 = evaluate(`${this.origin} / ${this.zt2Calc}`);
    this.y22Calc2 = evaluate(`${this.blCalc} / ${2}`);
    this.y22Calc3 = evaluate(`${this.origin} / ${this.zlCalc}`);
    this.y22Calc = complex(add(this.y22Calc1, this.y22Calc2, this.y22Calc3))
    console.log('y22 >>', this.y22Calc);
    console.log('<1> >> ', this.y22Calc1);
    console.log('<2> >> ', this.y22Calc2);
    console.log('<3> >> ', this.y22Calc3);
  }

  i11Calculation() {
    this.i11Calc = floor(evaluate(`(${this.u1Calc}) / (${this.zt1Calc})`), 3);
    // this.i11Calcj = floor(evaluate(this.u1Calc.re + '/' + this.zt1Calc.re), 3);
    // this.i11Calc = evaluate(this.u1Calc + '/' + this.zt1Calc);
    console.log('i11 im >>', this.i11Calc);
    // console.log('i11 re >>', this.i11Calcj);

  }

  i21Calculation() {
    this.i21Calc = floor(evaluate(`(${this.u2Calc}) / (${this.zt2Calc})`), 3);
    // this.i21Calcj = floor(evaluate(this.u2Calc.re + '/' + this.zt2Calc.im), 3);
    // this.i11Calc = evaluate(this.u1Calc + '/' + this.zt1Calc);
    console.log('i21 im >>', this.i21Calc);
    // console.log('i21 re >>', this.i21Calcj);

  }

  matrixCalculation() {
    this.matrixY = evaluate(`[[${this.y11Calc}, ${this.y12Calc}], [${this.y12Calc}, ${this.y11Calc}]]`);
    console.log('this.matrixY >>', this.matrixY);

    // this.matrixI = evaluate(`[${this.i11Calc}, ${this.i21Calc}]`);
    this.matrixI = [evaluate(`${this.i11Calc}`), evaluate(`${this.i21Calc}`)];
    console.log('matrix I >>', this.matrixI);


    const inverMatrix = inv(evaluate(`${ this.matrixY}`));
    console.log('matrix Y-1 >> ', inverMatrix);

    const multMatrixCalc = multiply(inverMatrix, this.matrixI);
    console.log('multi M >> ', multMatrixCalc);

    const f11 = multMatrixCalc._data['0'];
    const f21 = multMatrixCalc._data['1'];

    this.i1Result = evaluate(`((${f11}) - (${this.u1Calc})) / (${this.zt1Calc})`);
    console.log('i1Result >> ', this.i1Result);

    this.i2Result = evaluate(`((${f21}) - (${this.u2Calc})) / (${this.zt2Calc})`);

    console.log('f i2Result >> ', this.i2Result);



  }

  //




  constructor() { }

  ngOnInit(): void {
    this.u1Calculation();
    this.u2Calculation();
    this.zt1Calculation();
    this.zt2Calculation();
    this.zlCalculation();
    this.blCalculation();

    this.y11Calculation();
    this.y12Calculation();
    this.y21Calculation();
    this.y22Calculation();

    this.i11Calculation();
    this.i21Calculation();

    this.matrixCalculation();

  }

}
