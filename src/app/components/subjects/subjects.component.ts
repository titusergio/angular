import { Component, OnInit } from '@angular/core';
import {  NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { SubjectsService } from "../../services/subjects.service";
import { Subject } from "../../models/subject.model";
import { StudentService } from "../../services/student.service";


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(public subjectServices: SubjectsService, private router:Router, public studentService: StudentService) { }

 
  //selectedSubject: Subject = new Subject();
  newSubject:Subject = new Subject();

  subject!:Subject;

  ngOnInit(): void {
    this.getSubjects();
   

  }

  routing(id:string){

    this.getSubject(id);
    //this.studentService.stuendtsId= this.subjectServices.subject.students;
    //console.log(this.subjectServices.subject)
    this.router.navigate(['/students']);

  }

  getSubject(id:string){

    this.subjectServices.getSubject(id).subscribe(
      res => {
        this.studentService.subject=res;
      } ,
      err => console.error(err)
    )
    
  }

  getSubjects(){
    this.subjectServices.getSubjects().subscribe(
      res => {
        this.subjectServices.subjects = res;

      } ,
      err => console.error(err)
    )

  }

  addSubject(form:NgForm){
    

    console.log(form.value);

    this.newSubject.name=form.value.name;
    console.log(this.newSubject);

    
    this.subjectServices.createSubject(this.newSubject).subscribe(
      res => {
        this.getSubjects();
        form.reset();
      },
      err => console.error(err)

    )
    }

  deleteSubject(id:string){
    this.subjectServices.deleteSubject(id).subscribe(
      res => this.getSubjects(),
      err => console.error(err)
    );
  }

  editSubject(subject:Subject){
    this.subjectServices.selectedSubject=subject;

  }

}
