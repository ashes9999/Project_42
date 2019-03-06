import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from 'src/app/models/doctor.model';
import { all } from 'q';
import { TokenStorageService } from '../auth/token-storage.service';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class DoctorService{
constructor(private http:HttpClient, private token:TokenStorageService){}
private doctorUrl='http://localhost:8080/pm/doctor';
public getDoctorsId(doctor: string): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.doctorUrl + '/spec/' + doctor );
}

public getDoctors(){

    
    return this.http.get<Doctor[]>(this.doctorUrl + '/' + this.token.getUsername());
}
public deleteDoctor(doctor){
    
    return this.http.delete(this.doctorUrl + '/' + this.token.getUsername() );
}
public createDoctor(doctor){
    return this.http.post<Doctor>(this.doctorUrl, doctor);
}
}