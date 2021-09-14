import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse', component: ItemsListComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
    }),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
