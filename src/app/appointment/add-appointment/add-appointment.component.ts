import { Component } from '@angular/core';
import {Router } from '@angular/router';
import {AppointmentService } from 'src/app/appointment/appointment.service';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {
   appointment: Appointment= new Appointment();
  constructor(private router:Router, private appointmentService:AppointmentService) { }
  createAppointment():void {

    this.appointmentService.createAppointment(this.appointment).subscribe( data => {alert('Appointment created Successfully.');});
  }

}
