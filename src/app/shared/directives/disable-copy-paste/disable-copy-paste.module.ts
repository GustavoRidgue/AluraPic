import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisableCopyPasteDirective } from './disable-copy-paste.directive';

@NgModule({
  declarations: [DisableCopyPasteDirective],
  exports: [DisableCopyPasteDirective],
  imports: [CommonModule]
})
export class DisableCopyPasteModule { }
