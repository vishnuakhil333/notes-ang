import { Component } from '@angular/core';
import { Operands } from './operands';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes-ang';
  b: number;
  a: number;
  c: number;
  // op= [this.a,this.b,this.c];
  
  constructor() {
    
  }


  add() {
    this.c = this.a + this.b;
     
  }

  subtract() {
    this.c = this.a - this.b;

  }

  multiply() {
    this.c = this.a * this.b;

  }

  division() {
    this.c = this.a / this.b;

  }

}
