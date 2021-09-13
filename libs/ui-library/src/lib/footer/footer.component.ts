import { Component } from '@angular/core';
import { NavItem } from '@superheros/util-library';

@Component({
  selector: 'sup-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerItems: NavItem[] = [
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
