import { Component } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import {Router } from '@angular/router';
import {PatientService} from 'src/app/patient/patient.service';
import { from } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

 info:any;
  patient: Patient = new Patient();
  
  constructor(private token: TokenStorageService, private router: Router, private patientService: PatientService) {};
   createPatient(): void{
     this.patient.username = this.token.getUsername();
     this.patientService.createPatient(this.patient).subscribe( data => {alert('Patient created Successfully.');});
    
     
   };
   ngOnInit() {
    this.info = {
      
      user: this.token.getUsername(),
      
    };

}
}