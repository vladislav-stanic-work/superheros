import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
  ],
})
export class UiLibraryModule {}
