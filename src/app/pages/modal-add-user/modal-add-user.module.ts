import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddUserPageRoutingModule } from './modal-add-user-routing.module';

import { ModalAddUserPage } from './modal-add-user.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ModalAddUserPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ModalAddUserPage]
})
export class ModalAddUserPageModule {}
