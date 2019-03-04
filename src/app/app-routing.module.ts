import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from 'src/app/register.component';
import { LoginComponent } from 'src/app/login.component';
import { HomeComponent } from 'src/app/home.component';
import { UserComponent } from 'src/app/user/pm/user.component';
import { PmComponent } from 'src/app/user/pm/pm.component';
import { AdminComponent } from 'src/app/user/pm/admin.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'user/patient',
        component: AddPatientComponent
    },
    {
        path:'user/patient-view',
        component: PatientComponent
    },
    {
        path:'pm/doctor-view',
        component: DoctorComponent
    },
    {
        path:'pm/doctor',
        component: AddDoctorComponent
    },
    {
        path: 'user',
        component: UserComponent,
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }