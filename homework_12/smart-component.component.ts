import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-component',
  templateUrl: './smart-component.component.html',
  styleUrls: ['./smart-component.component.css']
})
export class SmartComponentComponent implements OnInit {

  heroes = [
    { id: 11, name: 'Mr. Nice', isVisible: true },
    { id: 12, name: 'Narco' , isVisible: true},
    { id: 13, name: 'Bombasto' , isVisible: true},
    { id: 14, name: 'Celeritas' , isVisible: true},
    { id: 15, name: 'Magneta' , isVisible: true},
    { id: 16, name: 'RubberMan' , isVisible: true},
    { id: 17, name: 'Dynama' , isVisible: true},
    { id: 18, name: 'Dr IQ' , isVisible: false},
    { id: 19, name: 'Magma' , isVisible: true},
    { id: 20, name: 'Tornado' , isVisible: true}
  ];

  constructor() { }

  ngOnInit() {
  }

}
