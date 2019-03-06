import { Component, OnInit} from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
 docs: Doctor[];

 
  constructor( private router: Router, private doctorService: DoctorService) {};
    ngOnInit(){ this.doctorService.getDoctors().subscribe((docs) => {console.log(docs);this.docs=docs;});
    
    }
   deleteDoc(docs){
     this.doctorService.deleteDoctor(parseInt(docs.doctorId)).subscribe((data)=>{this.docs.splice(this.docs.indexOf(docs),1);})
   ;}
    
}
