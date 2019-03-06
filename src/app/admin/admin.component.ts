import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[];
  data: [];
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getUsers().subscribe((data)=>{console.log(data);this.users=data;
    });
    }
  }

