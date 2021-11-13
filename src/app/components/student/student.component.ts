import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";
import { SubjectsService } from "../../services/subjects.service";
import { Student } from "../../models/student";
import { Subject } from "../../models/subject.model";
import {  NgForm } from "@angular/forms";
import { Router } from "@angular/router";
//import { Subject } from 'rxjs';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public studentService: StudentService, private router:Router, public subjectService: SubjectsService) { }

 
  selectedUser: Student = new Student();
  //subjectSelected!: Subject;
  prueba:Subject = new Subject;

  newStudentId!: string;
  nameStudent!:string;
  

    ngOnInit(): void {
    //this.subjectSelected = this.getSubject();
    this.getStudents();
    //this.filtrate();
    //console.log(this.subjectSelected);
    
    
   

  }

 

  show(){
    
    console.log(this.studentService.subject);

    this.newStudentId= this.studentService.students.find(e => e.name===this.nameStudent)?._id!;
    this.studentService.subject.students.push(this.newStudentId);
    this.studentService.subject.numberStudents = this.studentService.subject.numberStudents + 1;
    console.log(this.studentService.subject);
    console.log(this.studentService.subject._id);
    
    this.subjectService.updateSubject(this.studentService.subject,this.studentService.subject._id).subscribe();
    
    this.getStudents();


    

  }

  getName():string{
    return this.studentService.subject.name;
  }

  getSubject(){
    return this.studentService.subject;
  }

  getStudents(){
    this.studentService.getStudents().subscribe(
      res => {
        this.studentService.students = res;
        

      } ,
      err => console.error(err)
    )

  }
  /*
  filtrate(){
    for(var student of this.studentService.students){
      for(var id of this.studentService.studentsId){
        if(student._id==id){
          this.studentService.studentsSubject.push(student);
          
        }
      }
    }
  }
  */

  newStudent(form:NgForm){
    //console.log(form.value);

    //este es el caso donde editamos a un estudiante
    if (form.value.id){
      console.log("denttro");
      this.studentService.updateStudent(form.value,form.value.id).subscribe(
        res => {
          this.getStudents();
          form.reset();
        },
        err => console.error(err)
  
      )

        //en este caso añadimos usuario a la base de datos y cojemos la id q mongo ha creado para el y la insertamos en el array de Ids de la asignatura correspondiente y hacemos un put de esta asignatura
    }else{
    console.log(form.value);
    this.nameStudent=form.value.name;
    this.studentService.createStudent(form.value).subscribe(
      res => {
        this.getStudents();
        form.reset();
        

      },
      err => console.error(err)

    )
    }

    //console.log(this.studentService.selectedStudent);
    //this.addStundetSubject();
  }

  addStundetSubject(){
    this.getStudents();
    this.studentService.idNewStudent = this.studentService.students[this.studentService.students.length]._id;

  }

  deleteStudent(id:string){
    this.studentService.deleteStudent(id).subscribe(
      res => this.getStudents(),
      err => console.error(err)
    );
  }

  editStudent(student:Student){
    this.studentService.selectedStudent=student;

  }



}
