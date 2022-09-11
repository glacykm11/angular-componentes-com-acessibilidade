import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyBoardManagerDirective } from './keyboard-manager.directive';

@NgModule({
  declarations: [KeyBoardManagerDirective],
  imports: [CommonModule],
  exports: [KeyBoardManagerDirective],
})
export class KeyboardManagerModule {}
