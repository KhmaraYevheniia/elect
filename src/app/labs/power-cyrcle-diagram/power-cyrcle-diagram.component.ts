import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-cyrcle-diagram',
  templateUrl: './power-cyrcle-diagram.component.html',
  styleUrls: ['./power-cyrcle-diagram.component.scss']
})
export class PowerCyrcleDiagramComponent implements OnInit {

  public u1 = 100;
  u2 = 115;
  angle = 50;
  rt1 = 1.3;
  xt1 = 85.2;
  rt2 = 1.8;
  xt2 = 90.3;
  rl = 1.2;
  xl = 7;
  bl = 6 * 10^-6;
  radian = Math.PI / 180;
  u1Calc: number = 1 ;

  u1Calculation() {
    this.u1Calc = this.u1 * Math.exp(0*this.radian);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
