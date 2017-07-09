﻿import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { GridModule } from '@progress/kendo-angular-grid';

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
import { DepartmentsService } from './departments/departments.service';
import { AboutService } from './about/about.service';
import { AboutGridDataBindingDirective } from './about/about-grid-data-binding.directive';
import { GridExampleComponent } from './grid-example/grid-example.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		NavigationComponent,
		HomeComponent,
		AboutComponent,
		PageNotFoundComponent,
		DepartmentsComponent,
		StudentsComponent,
		CoursesComponent,
		InstructorsComponent,
		ContactComponent,
		AboutGridDataBindingDirective,
		GridExampleComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		DateInputsModule,
		InputsModule,
		ButtonsModule,
		LabelModule,
		GridModule,
		AppRoutingModule
	],
	providers: [
		DepartmentsService,
		StudentsService,
		InstructorsService,
		CoursesService,
		AboutService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
