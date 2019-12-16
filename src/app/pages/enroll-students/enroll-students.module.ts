import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrollStudentsPageRoutingModule } from './enroll-students-routing.module';

import { EnrollStudentsPage } from './enroll-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrollStudentsPageRoutingModule
  ],
  declarations: [EnrollStudentsPage]
})
export class EnrollStudentsPageModule {}
