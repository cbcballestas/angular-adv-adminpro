import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [BreadcrumbsComponent, SidenavComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbsComponent, SidenavComponent, HeaderComponent],
})
export class SharedModule {}
