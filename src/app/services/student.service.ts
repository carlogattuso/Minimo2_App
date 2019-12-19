import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/student'
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }

  deleteStudent(studentId) {
    return this.http.delete(this.url+'/'+studentId);
  }

  addStudent(student:any) {
    return this.http.post(this.url,student);
  }

  /*getStudentsByStudies(studies): Observable<Student[]>{
    return this.http.get<Student[]>(this.url.urlStudent+'/studies/'+studies);
  }*/
}
