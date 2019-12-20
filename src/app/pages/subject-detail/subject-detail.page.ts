import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlertController, ToastController} from "@ionic/angular";
import {Subject} from "../../models/subject";
import {Student} from "../../models/student";
import {SubjectService} from "../../services/subject.service";

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.page.html',
  styleUrls: ['./subject-detail.page.scss'],
})
export class SubjectDetailPage implements OnInit {

  subject: Subject;
  students: Student[];
  subjectId: string;
  studentId: string;

  constructor(private router: Router, private alertCtrl: AlertController, private service: SubjectService,
              private toastCtrl: ToastController, public activatedRoute : ActivatedRoute) { }

  async ngOnInit() {
    this.updateInfo();
  }

  async ionViewDidEnter(){
    this.updateInfo();
  }

  async updateInfo(){
    this.subjectId = this.activatedRoute.snapshot.paramMap.get('subjectId');
    await this.service.getSubjectById(this.subjectId).subscribe(subject => this.subject=subject);
    await this.service.getStudents(this.subjectId).subscribe(students => this.students=students);
  }

  async presentAlertConfirm() {
    await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete this student from this subject?',
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
            this.removeStudent();
          }
        }
      ]
    }).then(alert =>{
      alert.present();
    });
  }

  async launchToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    await toast.present();
  }
  async removeStudent (){
    console.log("SubjectId: "+this.subjectId);
    console.log("StudentId: "+this.studentId);
    this.service.removeStudent(this.subjectId,this.studentId)
        .subscribe(
            res => [this.launchToast('Student removed successfully'), this.updateInfo()]
        );
  }

  async goToStudent(id: any){
    this.router.navigateByUrl('/student-detail/'+id);
  }
}
