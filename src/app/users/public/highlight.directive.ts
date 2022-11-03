import { Directive, ElementRef, HostListener } from '@angular/core';
import { copyToClipboard } from './helper';

@Directive({
  selector: '[appCopy]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 
  }

  @HostListener('click') onMouseEnter() {
    copyToClipboard(this.el.nativeElement.innerText)
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.el.nativeElement, 'yellow');
  // }
  
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(this.el.nativeElement, '');
  // }
  
  // highlight(p: HTMLParagraphElement, color: string){
  //   p.style.backgroundColor= color;
  // }


}
