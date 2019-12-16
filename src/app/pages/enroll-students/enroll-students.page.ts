import { Component, OnInit } from '@angular/core';
import {Subject} from "../../models/subject";
import {SubjectService} from "../../services/subject.service";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";
import {AlertController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-enroll-students',
  templateUrl: './enroll-students.page.html',
  styleUrls: ['./enroll-students.page.scss'],
})
export class EnrollStudentsPage implements OnInit {

  subjects: Subject[];
  students: Student[];
  studentSelectedRadioGroup: any;
  subjectSelectedRadioGroup: any;

  constructor(private subjectService: SubjectService, private studentService: StudentService, private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  async ngOnInit() {
    this.updateInfo();
  }

  async ionViewDidEnter(){
    this.updateInfo();
  }

  async updateInfo () {
    await this.subjectService.getSubjects().subscribe(subjects => {
      this.subjects = subjects;
    });
    await this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  async studentRadioGroupChange(event) {
    this.studentSelectedRadioGroup = event.detail;
  }

  async subjectRadioGroupChange(event) {
    this.subjectSelectedRadioGroup = event.detail;
  }

  async enrollStudent (){
    let studentId = this.studentSelectedRadioGroup.value;
    let subjectId = this.subjectSelectedRadioGroup.value;
    this.subjectService.enrollStudent(subjectId, studentId)
        .subscribe(
            res => [this.launchToast('Student added successfully'), this.updateInfo()],
            error => this.launchToast('Student is already in that subject'),
        );
  }

  async launchToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    await toast.present();
  }

  async presentAlertConfirm() {
    await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Are you sure you want to enroll this student?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.enrollStudent();
          }
        }
      ]
    }).then(alert =>{
      alert.present();
    });
  }
}
