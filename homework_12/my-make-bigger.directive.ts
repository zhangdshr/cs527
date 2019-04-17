import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Directive({
  selector: '[appMyMakeBigger]'
})
export class MyMakeBiggerDirective {

  elem : ElementRef
  rend: Renderer2

  constructor(private element: ElementRef, private render: Renderer2) { 
    this.elem = element
    this.rend = render
  }

  @HostListener('click') onClicked() {
    console.log('onClicked ran!');

    this.elem.nativeElement.style.fontSize = '30px'
    this.rend.setStyle(this.elem.nativeElement, 'font-size', '30px')


  }
  

}
