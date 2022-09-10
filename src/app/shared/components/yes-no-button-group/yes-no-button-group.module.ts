import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './YesNoButtonGroupComponent';

@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [CommonModule],
  exports: [YesNoButtonGroupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class YesNoButtonGroupModule {}
