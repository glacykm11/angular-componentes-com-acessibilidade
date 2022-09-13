import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[keyboardManagedItem]',
})
export class KeyBoardManagedItemDirective {
  constructor(private elementRef: ElementRef<HTMLElement>){}

  public focus() {
    this.elementRef.nativeElement.focus();
  }

  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
