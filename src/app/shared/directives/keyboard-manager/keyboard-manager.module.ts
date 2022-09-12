import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyBoardManagerDirective } from './keyboard-manager.directive';
import { KeyBoardManagedItemDirective } from './keyboard-managed-item.directive';

@NgModule({
  declarations: [KeyBoardManagerDirective, KeyBoardManagedItemDirective],
  imports: [CommonModule],
  exports: [KeyBoardManagerDirective, KeyBoardManagedItemDirective],
})
export class KeyboardManagerModule {}
