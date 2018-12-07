import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedMaterialModule } from 'src/app/shared/shared-material/shared-material.module';
import { HomeComponent } from './pages/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
