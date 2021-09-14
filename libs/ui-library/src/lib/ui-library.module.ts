import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule],
  declarations: [ButtonComponent, HeaderComponent, FooterComponent],
  exports: [ButtonComponent, HeaderComponent, FooterComponent],
})
export class UiLibraryModule {}
