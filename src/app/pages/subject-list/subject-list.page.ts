import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../services/subject.service';
import {Subject} from "../../models/subject";
import {Observable} from "rxjs";
import {AlertController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.page.html',
  styleUrls: ['./subject-list.page.scss'],
})
export class SubjectListPage implements OnInit {

  subjects: Subject[];
  subjectId: string;

  constructor(private service: SubjectService, private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  async ngOnInit() {
    this.updateInfo();
  }

  async updateInfo(){
    await this.service.getSubjects().subscribe(subjects => {
      this.subjects = subjects;
    });
  }

  async ionViewDidEnter(){
    this.updateInfo();
  }

  async addSubject (){
    let subject = new Subject();
    subject.name = "Seguretat en Xarxes";
    subject.students = [];
    this.subjects.push(subject);
  }

  async deleteSubject (){
    await this.service.deleteSubject(this.subjectId).subscribe(res => [this.launchToast('Subject deleted successfully'),this.updateInfo()]);
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
            this.deleteSubject();
          }
        }
      ]
    }).then(alert =>{
      alert.present();
    });
  }
}
