import { Component, OnInit } from '@angular/core';

import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  students: Student[];
  constructor(private service: StudentService, private toastCtrl: ToastController) { }

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

  async deleteStudent (studentId){
    await this.service.deleteStudent(studentId).subscribe(res => [this.launchToast('Student deleted successfully'),this.updateInfo()]);
  }

  async launchToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    await toast.present();
  }
}
