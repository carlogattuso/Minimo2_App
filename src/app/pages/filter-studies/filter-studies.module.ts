import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterStudiesPageRoutingModule } from './filter-studies-routing.module';

import { FilterStudiesPage } from './filter-studies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterStudiesPageRoutingModule
  ],
  declarations: [FilterStudiesPage]
})
export class FilterStudiesPageModule {}
