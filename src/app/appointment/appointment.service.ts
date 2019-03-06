import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from 'src/app/models/appointment.model';
import { TokenStorageService } from '../auth/token-storage.service';


const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class AppointmentService{
constructor(private http:HttpClient, private token: TokenStorageService){}
private appointmentUrl='http://localhost:8080/user/Appointment';

public getAppointment(){
    return this.http.get<Appointment[]>(this.appointmentUrl +'/'+ this.token.getUsername());
}
public getDoctorAppointment(doctor:string){
    return this.http.get<Appointment[]>(this.appointmentUrl + '/doc/' + doctor);
}
public deleteAppointment(appointment:string){
    return this.http.delete(this.appointmentUrl + "/"+ appointment);
}
public createAppointment(appointment){
    return this.http.post<Appointment>(this.appointmentUrl, appointment);
}
}