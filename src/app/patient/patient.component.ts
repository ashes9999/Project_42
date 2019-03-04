import { Component, OnInit } from '@angular/core';
import {PatientService} from './patient.service';
import { Patient } from '../models/patient.model';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
patient : Patient[];
  constructor(private token: TokenStorageService, private patientService:PatientService, private router: Router) { };

  ngOnInit(){ this.patientService.getPatients().subscribe((patient) => {console.log(patient);this.patient = patient;});
}
deletePatient(patient){
 this.patientService.deletePatient(parseInt(patient.patientId)).subscribe((data)=>{patient.splice(patient.indexOf(patient),1)})
;}

}
