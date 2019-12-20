import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-filter-studies',
  templateUrl: './filter-studies.page.html',
  styleUrls: ['./filter-studies.page.scss'],
})
export class FilterStudiesPage implements OnInit {

  students: Student[];
  studiesForm: FormGroup;
  studentId: string;

  constructor(private service: StudentService, private formBuilder: FormBuilder, private router: Router,
              private alertCtrl: AlertController) {
    this.studiesForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required]))});
  }

  async ngOnInit() {
  }

  async searchUsers (studiesForm:any) {
    let subject = {
      name: studiesForm.name
    };
    await this.service.getStudentsByStudies(subject.name).subscribe(
        res => this.students = res);
    if(!this.students) this.presentAlertEmpty();
  }

  async goToStudent(id: any){
    this.router.navigateByUrl('/student-detail/'+id);
  }

  async presentAlertEmpty() {
    await this.alertCtrl.create({
      header: 'Empty search!',
      message: 'There are no students with this study...',
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
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }
}
