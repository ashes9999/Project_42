import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';

import { RegisterComponent } from 'src/app/register.component';
import { LoginComponent } from 'src/app/login.component';
import { HomeComponent } from 'src/app/home.component';
import { UserComponent } from 'src/app/user/pm/user.component';
import { PmComponent } from 'src/app/user/pm/pm.component';
import { AdminComponent } from 'src/app/user/pm/admin.component';
 
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { PatientService } from './patient/patient.service';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { DoctorService } from './doctor/doctor.service';
import { AddAppointmentComponent } from './appointment/add-appointment/add-appointment.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentService } from './appointment/appointment.service';
import { DocAppComponent } from './doctor/doc-app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    AddPatientComponent,
    PatientComponent,
    DoctorComponent,
    AddDoctorComponent,
    AppointmentComponent,
    AddAppointmentComponent,
    DocAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders,PatientService,DoctorService,AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }