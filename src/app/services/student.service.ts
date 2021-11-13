import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from "../models/student";
import { Subject } from "../models/subject.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  URL_API = 'http://localhost:4000/students'

  selectedStudent: Student = new Student();
  students! : Student[];
  public subjectId!: string;
  public studentsId! :string[];
  studentsSubject! : Student[];

  subject!: Subject;


  idNewStudent!: string;


  constructor(private http:HttpClient) {}

    getStudents() {
      return this.http.get<Student[]>(this.URL_API);
      
    }

    createStudent(student: Student){
      return this.http.post(this.URL_API,student);
    }

    deleteStudent(_id: string) {
      return this.http.delete(`${this.URL_API}/${_id}`);
      
    }

    //lo pongo por separado porque si pongo en el input type="hidden" de nombre "_id" me da conflicto al hacer un post
    updateStudent(student: Student, id: String){
      
      return this.http.put(`${this.URL_API}/${id}`,student);

    }





 }

