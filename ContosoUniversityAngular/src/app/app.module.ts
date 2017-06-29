import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ContactComponent } from './contact/contact.component';
import { StudentsService } from './students/students.service';
import { InstructorsService } from './instructors/instructors.service';
import { CoursesService } from './courses/courses.service';

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
		BrowserAnimationsModule,
		ToastModule.forRoot(),
		HttpModule,
		AppRoutingModule
	],
	providers: [StudentsService, InstructorsService, CoursesService],
	bootstrap: [AppComponent]
})
export class AppModule { }
