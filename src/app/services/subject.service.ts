import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subject} from "../models/subject";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/subject'
  }

  getSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.url);
  }

  enrollStudent(subjectId, studentId){
    return this.http.post(this.url+'/addStudent',{subjectId:subjectId,studentId:studentId});
  }

  deleteSubject(subjectId){
    return this.http.delete(this.url+'/'+subjectId);
  }

  getSubjectById(subjectId): Observable<Subject>{
    return this.http.get<Subject>(this.url+'/'+subjectId);
  }

  getStudents(subjectId): Observable<Student[]>{
    return this.http.get<Student[]>(this.url+'/students/'+subjectId);
  }

  removeStudent(subjectId, studentId){
    return this.http.delete(this.url+'/student/'+subjectId+'/'+studentId);
  }

  /*getStudentsByStudies(studies): Observable<Student[]>{
    return this.http.get<Student[]>(this.url.urlStudent+'/studies/'+studies);
  }

  addSubject(subject:Subject) {
    return this.http.post(this.url.urlSubject,subject);
  }*/
}

