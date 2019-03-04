import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from 'src/app/models/patient.model';
import { TokenStorageService } from '../auth/token-storage.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class PatientService{
constructor(private token: TokenStorageService, private http:HttpClient){}
private patientUrl='http://localhost:8080/user/patient';

public getPatients(){
    return this.http.get<Patient[]>(this.patientUrl + '/' + this.token.getUsername());
}
public deletePatient(patient){
    return this.http.delete(this.patientUrl + '/' +  this.token.getUsername());
}
public createPatient(patient){
    return this.http.post<Patient>(this.patientUrl, patient);
}
}