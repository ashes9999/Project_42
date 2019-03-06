import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-advpat',
  templateUrl: './advpat.component.html',
  styleUrls: ['./advpat.component.css']
})
export class AdvpatComponent implements OnInit {
patient: Patient[];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getPatients().subscribe((patients) => {console.log(patients);this.patient = patients;});
  }

}
