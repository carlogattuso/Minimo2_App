import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterStudiesPage } from './filter-studies.page';

const routes: Routes = [
  {
    path: '',
    component: FilterStudiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterStudiesPageRoutingModule {}
