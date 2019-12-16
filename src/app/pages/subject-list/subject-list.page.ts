import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../services/subject.service';
import {Subject} from "../../models/subject";
import {Observable} from "rxjs";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.page.html',
  styleUrls: ['./subject-list.page.scss'],
})
export class SubjectListPage implements OnInit {

  subjects: Subject[];

  constructor(private service: SubjectService, private toastCtrl: ToastController) { }

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

  async deleteSubject (subjectId){
    await this.service.deleteSubject(subjectId).subscribe(res => [this.launchToast('Subject deleted successfully'),this.updateInfo()]);
  }

  async launchToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    await toast.present();
  }
}
