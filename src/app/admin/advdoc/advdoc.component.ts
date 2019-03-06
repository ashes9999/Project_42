import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-advdoc',
  templateUrl: './advdoc.component.html',
  styleUrls: ['./advdoc.component.css']
})
export class AdvdocComponent implements OnInit {
docs: Doctor[];
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getDoctors().subscribe((data)=>{console.log(data);this.docs=data;
    });
  }

}
