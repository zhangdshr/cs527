import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  componentCounterValue: number = 0

  _componentCounterValue(value: number): void{
    this.componentCounterValue = value;
  }


  countreTracking(counter){
    this.componentCounterValue = counter;
      console.log(counter);
  }

}
