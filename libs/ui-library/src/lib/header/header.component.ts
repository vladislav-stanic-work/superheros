import { Component } from '@angular/core';
import { NavItem } from '@superheros/util-library';

@Component({
  selector: 'sup-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navItems: NavItem[] = [
    {
      name: 'One',
      url: '',
    },
    {
      name: 'Two',
      url: '',
    },
    {
      name: 'Three',
      url: '',
    },
  ];
}
