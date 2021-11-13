import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from "./components/student/student.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'subjects',
    pathMatch: 'full'
  },
  {
  path: 'students',
  component: StudentComponent
  },

  {
  path: 'subjects',
  component: SubjectsComponent
  }   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
