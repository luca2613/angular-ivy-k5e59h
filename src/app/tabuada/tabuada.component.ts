import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  v = 1;
  constructor() {}

  ngOnInit() {}

  tabuadaCinco() {
    while (this.v <= 10) {
      return this.v * 5;
      this.v += 1;
    }
  }
}
