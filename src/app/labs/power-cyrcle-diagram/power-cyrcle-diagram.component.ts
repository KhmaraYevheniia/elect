import { Component, OnInit } from '@angular/core';
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, complex, add, multiply
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
  public origin = 1;
  public u1Calc: number;
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

  u1Calculation() {
    this.u1Calc = complex(multiply(this.u1, pow(e, 0 * this.radian)));
    console.log('u1 >> ', this.u1Calc);
  }

  u2Calculation() {
    this.u2Calc = round(complex(this.u2, pow(e, this.angle* this.radian)), 2);
    console.log('u2 >> ', this.u2Calc);
  }

  zt1Calculation() {
    this.zt1Calc = complex(this.rt1j, this.xt1i);
    console.log('zt1 >> ', this.zt1Calc);

  }

  zt2Calculation() {
    this.zt2Calc = complex(this.rt2j, this.xt2i);
    console.log('zt2 >> ', this.zt2Calc);

  }

  zlCalculation() {
    this.zlCalc = complex(this.rlj, this.xli);
    console.log('zl >> ', this.zlCalc);
  }

  blCalculation() {
    this.blCalc = complex(this.blj, this.bli);
    console.log('bl >> ', this.blCalc);
  }

  y11Calculation() {
    this.y11Calc1 = evaluate(`${this.origin} / ${this.zt1Calc}`);
  this.y11Calc2 = evaluate(`${this.blCalc} / 2`);
    this.y11Calc3 = evaluate(`${this.origin} / ${this.zlCalc}`);
    this.y11Calc = complex(add(this.y11Calc1, this.y11Calc2, this.y11Calc3))
    console.log('y11 >>', this.y11Calc);
    console.log('<1> >> ', this.y11Calc1);
    console.log('<2> >> ', this.y11Calc2);
    console.log('<3> >> ', this.y11Calc3);

  }

  y12Calculation() {
    this.y12Calc = evaluate(`${-this.origin} / ${this.zlCalc}`)
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
  }

}
