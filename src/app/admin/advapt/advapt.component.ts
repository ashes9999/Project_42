import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-advapt',
  templateUrl: './advapt.component.html',
  styleUrls: ['./advapt.component.css']
})
export class AdvaptComponent implements OnInit {
appointment: Appointment[];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAppointments().subscribe((apts) => { console.log(apts); this.appointment = apts });
  }

}
