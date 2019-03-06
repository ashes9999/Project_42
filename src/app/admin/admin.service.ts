import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from 'src/app/models/patient.model';
import { TokenStorageService } from '../auth/token-storage.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { Appointment } from '../models/appointment.model';

const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class AdminService{
constructor(private token: TokenStorageService, private http:HttpClient){}
private adminUrl='http://localhost:8080/';
private adminUrl1='http://localhost:8080/pm/doctor/all';
private adminUrl2='http://localhost:8080/user/Appointment/all';
private adminUrl3='http://localhost:8080/user/patient/all';
public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.adminUrl + 'all' );
}
public getDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.adminUrl1);
}
public getAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.adminUrl2);
}
public getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(this.adminUrl3);
}

}