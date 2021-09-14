import { Component } from '@angular/core';
import { NavItem } from '@superheros/util-library';

import { HEADER_NAV } from './models';

@Component({
  selector: 'sup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navItems: NavItem[] = HEADER_NAV;
}
