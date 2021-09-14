import { Component, Input } from '@angular/core';
import { NavItem } from '@superheros/util-library';

@Component({
  selector: 'sup-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() navItems: NavItem[] = [];
}
