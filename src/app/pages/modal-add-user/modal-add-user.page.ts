import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";
import {isAsciiLetter} from "codelyzer/angular/styles/chars";
import {stripUnnecessaryQuotes} from "@angular/compiler/src/render3/view/style_parser";

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.page.html',
  styleUrls: ['./modal-add-user.page.scss'],
})
export class ModalAddUserPage implements OnInit {

  studentForm: FormGroup;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder, private service: StudentService,
              private toastCtrl: ToastController ) {
    this.studentForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([Validators.required])),
      phones: this.formBuilder.array([
        this.pushPhone()]),
      studies: this.formBuilder.array([
        this.pushStudy()])})
  }

  ngOnInit() {
  }

  pushPhone() : FormGroup
  {
    return this.formBuilder.group({
      key : new FormControl('', Validators.compose([Validators.required])),
      value: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  pushStudy() : FormGroup
  {
    return this.formBuilder.group({
      name : new FormControl('', Validators.compose([Validators.required]))
    });
  }

  removeInputFieldPhones(i : number) : void
  {
    let control = <FormArray>this.studentForm.controls.phones;
    control.removeAt(i);
  }

  addNewInputFieldPhones() : void
  {
    let control = <FormArray>this.studentForm.controls.phones;
    control.push(this.pushPhone());
  }

  removeInputFieldStudies(i : number) : void
  {
    let control = <FormArray>this.studentForm.controls.studies;
    control.removeAt(i);
  }

  addNewInputFieldStudies() : void
  {
    let control = <FormArray>this.studentForm.controls.studies;
    control.push(this.pushStudy());
  }

  close (){
    this.modalCtrl.dismiss();
  }

  addStudent(studentForm:any) {
    let student = {
      name: studentForm.name,
      address: studentForm.address,
      phones: studentForm.phones,
      studies: studentForm.studies
    };
    this.service.addStudent(student).subscribe(
        res => this.launchToast('Student added successfully'),
        error => this.launchToast('Duplicated student'));
  }

  async launchToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    await toast.present();
  }
}
