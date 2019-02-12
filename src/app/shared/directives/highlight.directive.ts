import {Directive, ElementRef} from '@angular/core';

@Directive({selector: '[appHighlight], input'})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#efeeed';
  }
}
