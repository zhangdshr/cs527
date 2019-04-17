import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyIsVisible]'
})
export class MyIsVisibleDirective {

  @Input() myIsVisible: boolean;

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit(){
    if(!this.myIsVisible){
      console.log("test " + this.myIsVisible)
      this.render.setStyle(this.element.nativeElement, 'visibility', 'hidden')
      }
    
  }

}
