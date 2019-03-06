import { Component } from '@angular/core';
import { AppointmentService } from './appointment.service';
import { Appointment } from '../models/appointment.model';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  info: any;
  appointment: Appointment[];
  constructor(private appointmentService: AppointmentService, private token: TokenStorageService) { }

  ngOnInit() {

    this.appointmentService.getAppointment().subscribe((apt) => { console.log(apt); this.appointment = apt });
  }
  cancel(apt) {
    this.appointmentService.deleteAppointment((this.token.getUsername())).subscribe((data) => 
    { alert('Cancelled Appointment Successfully.'); });
  }

}

