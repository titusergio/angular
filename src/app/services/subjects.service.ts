import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Subject } from "../models/subject.model";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  URL_API = 'http://localhost:4000/subjects'

  selectedSubject: Subject = new Subject();
  subjects! : Subject[];
  studentsId! : string[];

  


  constructor(private http:HttpClient) {}

    getSubjects() {
      return this.http.get<Subject[]>(this.URL_API);
      
    }

    getSubject(_id:string){
      return this.http.get<Subject>(`${this.URL_API}/${_id}`);

    }

    createSubject(subject: Subject){
      return this.http.post(this.URL_API,subject);
    }

    deleteSubject(_id: string) {
      return this.http.delete(`${this.URL_API}/${_id}`);
      
    }

    //lo pongo por separado porque si pongo en el input type="hidden" de nombre "_id" me da conflicto al hacer un post
    updateSubject(subject: Subject, id: String){
      
      return this.http.put(`${this.URL_API}/${id}`,subject);

    }


}
