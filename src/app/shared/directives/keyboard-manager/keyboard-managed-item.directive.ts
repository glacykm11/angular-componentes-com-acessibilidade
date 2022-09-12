import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[keyboardManagedItem]',
})
export class KeyBoardManagedItemDirective {
  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up');
        break;
      case 'ArrowDown':
        console.log('down');
        break;
      case 'ArrowRight':
        console.log('right');
        break;
      case 'ArrowLeft':
        console.log('left');
        break;
    }
  }
}
