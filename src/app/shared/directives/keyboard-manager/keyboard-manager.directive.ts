import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { KeyBoardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({
  selector: '[keyboardManager]',
})
export class KeyBoardManagerDirective {
  @ContentChildren(KeyBoardManagedItemDirective)
  public items: QueryList<KeyBoardManagedItemDirective> = null;
  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        console.log(this.items);
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
