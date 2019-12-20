import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalController, ToastController} from "@ionic/angular";
import {StudentService} from "../../services/student.service";
import {SubjectService} from "../../services/subject.service";

@Component({
  selector: 'app-modal-add-subject',
  templateUrl: './modal-add-subject.page.html',
  styleUrls: ['./modal-add-subject.page.scss'],
})
export class ModalAddSubjectPage implements OnInit {

  subjectForm: FormGroup;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder, private service: SubjectService,
              private toastCtrl: ToastController) {
    this.subjectForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required]))});
  }

  ngOnInit() {
  }

  close (){
    this.modalCtrl.dismiss();
  }

  addSubject(subjectForm:any) {
    let subject = {
      name: subjectForm.name
    };
    this.service.addSubject(subject).subscribe(
        res => this.launchToast('Subject added successfully'),
        error => this.launchToast('Duplicated subject'));
  }

  async launchToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    await toast.present();
  }
}
