import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { Button } from 'protractor';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {

  @Output() onCounterChange = new EventEmitter();
  @Input() counterValue: number = 0;

  constructor() { 
    this.counterValue = 0
  }

  ngOnInit() {
  }

  increase() {
    this.counterValue++
    this.onCounterChange.emit(this.counterValue);
  }

  decrease() {
    this.counterValue--
    this.onCounterChange.emit(this.counterValue);
  }

}
