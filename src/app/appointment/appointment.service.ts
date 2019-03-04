import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from 'src/app/models/appointment.model';


const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class AppointmentService{
constructor(private http:HttpClient){}
private appointmentUrl='http://localhost:8080/Appointment';

public getAppointment(){
    return this.http.get<Appointment[]>(this.appointmentUrl);
}
public deleteAppointment(appointment){
    return this.http.delete(this.appointmentUrl + "/"+ appointment.id);
}
public createAppointment(appointment){
    return this.http.post<Appointment>(this.appointmentUrl, appointment);
}
}