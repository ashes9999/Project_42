import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { AppointmentService } from '../appointment/appointment.service';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-doc-app',
  templateUrl: './doc-app.component.html',
  styleUrls: ['./doc-app.component.css']
})
export class DocAppComponent implements OnInit {
  private doc: Doctor[];
  appointment: Appointment[];
  constructor(private doctorService: DoctorService, private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.doctorService.getDoctors().subscribe((data) => {
      console.log(data); this.doc = data;
      this.getAppt(this.doc);


    });

  }
  getAppt(doc) {

    this.appointmentService.getDoctorAppointment(doc.doctorname).subscribe((dat) => {
  
       this.appointment = dat;
    });
  }
  cancel() {
    console.log(this.appointment);
    
    this.appointmentService.deleteAppointment(this.appointment[0].patientname).subscribe((data) => { this.appointment
      .splice(this.appointment.indexOf(this.appointment[0]), 1); alert('Cancelled Appointment Successfully.'); });
  }

}
