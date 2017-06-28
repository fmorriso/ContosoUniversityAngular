import { BrowserModule }         from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }      from './app-routing.module';
import { AppComponent }          from './app.component';
import { FooterComponent }       from './footer/footer.component';
import { NavigationComponent }   from './navigation/navigation.component';
import { HomeComponent }         from './home/home.component';
import { AboutComponent }        from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent }     from './students/students.component';
import { CoursesComponent }      from './courses/courses.component';
import { InstructorsComponent }  from './instructors/instructors.component';
import { DepartmentsComponent }  from './departments/departments.component';
import { ContactComponent }      from './contact/contact.component';
import { StudentsService }       from './students/students.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    StudentsComponent,
    CoursesComponent,
    InstructorsComponent,
    DepartmentsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
