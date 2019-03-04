import { Component } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Router } from '@angular/router'
import { TokenStorageService } from 'src/app/auth/token-storage.service';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  doctor: Doctor = new Doctor();
  
   constructor(private router: Router, private doctorService: DoctorService, private token:TokenStorageService) {};
    createDoctor(): void{
      this.doctor.username = this.token.getUsername();
      this.doctorService.createDoctor(this.doctor).subscribe( data => {alert('Doctor created Successfully.');});
    };
    
   }