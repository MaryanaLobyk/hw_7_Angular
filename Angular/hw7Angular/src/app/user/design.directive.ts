import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDesign]'
})
export class DesignDirective {

  constructor(private element: ElementRef, renderer2: Renderer2) {
    renderer2.setStyle(element.nativeElement, 'fontFamily', 'cursive');
    element.nativeElement.style.fontWeight = 'border';
    renderer2.setStyle(element.nativeElement, 'margin', '20px');
  }

  @HostListener('mouseover')
  change(): void{
    this.element.nativeElement.style.background = 'purple';
  }

}
