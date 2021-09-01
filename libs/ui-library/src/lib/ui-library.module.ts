import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class UiLibraryModule {}
