import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMainstyle]'
})
export class MainstyleDirective {

  constructor(element: ElementRef, renderer2: Renderer2) {
    renderer2.setStyle(element.nativeElement, 'fontSize', 30);
    element.nativeElement.style.margin = '30px';
    renderer2.setStyle(element.nativeElement, 'fontSize', '30px');
    element.nativeElement.style.color = 'black';
    renderer2.setStyle(element.nativeElement, 'fontFamily', 'cursive');
    element.nativeElement.style.fontWeight = '800';

  }
}
