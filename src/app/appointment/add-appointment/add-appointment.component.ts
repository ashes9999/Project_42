import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {AppointmentService } from 'src/app/appointment/appointment.service';
import { Appointment } from 'src/app/models/appointment.model';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit{
   appointment: Appointment = new Appointment();
   spec: string;
   doctor: Doctor[] ;
  tim = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM','2 PM','3 PM','4 PM','5 PM'];
  constructor( private router:Router, private appointmentService:AppointmentService, private doctorService: DoctorService, private token: TokenStorageService) {  }
  createAppointment():void {
   
    this.appointmentService.createAppointment(this.appointment).subscribe( data => {alert('Appointment created Successfully.');});
  }
  getDocs(spec){ 
    this.doctorService.getDoctorsId(spec).subscribe((doctor) => {console.log(doctor);this.doctor = doctor;});
    
  }
  bookDoctor(){
    console.log(this.appointment.doctorname);
    
    this.appointmentService.createAppointment(this.appointment).subscribe(data => {alert('Appointment booked Successfully.');});
  }
ngOnInit(){
  this.appointment.patientname = this.token.getUsername();
}
}
