import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {

  userId: string;
  student: Student;

  constructor(public activatedRoute : ActivatedRoute, private service: StudentService) {}

  async ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('studentId');
    await this.service.getStudentById(this.userId).subscribe(student => this.student=student);
  }

  async ionViewDidEnter(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('studentId');
    await this.service.getStudentById(this.userId).subscribe(student => this.student=student);
  }
}
