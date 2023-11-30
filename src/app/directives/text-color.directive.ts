import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @Input('appTextColor') textColor: string ="red";

  constructor(private elemento: ElementRef) { }

  ngAfterViewInit(){
    this.elemento.nativeElement.style.color = this.textColor;
  }

}
