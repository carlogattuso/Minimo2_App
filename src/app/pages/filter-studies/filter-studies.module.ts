import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterStudiesPageRoutingModule } from './filter-studies-routing.module';

import { FilterStudiesPage } from './filter-studies.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FilterStudiesPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [FilterStudiesPage]
})
export class FilterStudiesPageModule {}
