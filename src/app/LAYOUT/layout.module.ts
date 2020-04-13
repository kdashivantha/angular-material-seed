import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
      MainComponent, 
      HeaderComponent,
      SideMenuComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutModule { }
