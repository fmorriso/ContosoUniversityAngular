import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { HomeComponent }         from './home/home.component';
import { AboutComponent }        from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent }     from './students/students.component';
import { CoursesComponent }      from './courses/courses.component';
import { InstructorsComponent }  from './instructors/instructors.component';
import { DepartmentsComponent }  from './departments/departments.component';
import { ContactComponent }      from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: { title: 'Redirect to default Page' }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
