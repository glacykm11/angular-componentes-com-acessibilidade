import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { KeyboardManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';

@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [CommonModule, KeyboardManagerModule],
  exports: [YesNoButtonGroupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class YesNoButtonGroupModule {}
