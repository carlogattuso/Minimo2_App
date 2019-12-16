import { Component, OnInit } from '@angular/core';

import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";
import {AlertController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  students: Student[];
  studentId: string;

  constructor(private service: StudentService, private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  async ngOnInit() {
    this.updateInfo();
  }

  async ionViewDidEnter(){
    this.updateInfo();
  }

  async updateInfo(){
    await this.service.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  async deleteStudent (){
    await this.service.deleteStudent(this.studentId).subscribe(res => [this.launchToast('Student deleted successfully'),this.updateInfo()]);
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
      message: 'Are you sure you want to delete this student?',
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
            this.deleteStudent();
          }
        }
      ]
    }).then(alert =>{
      alert.present();
    });
  }
}
