import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServicesService} from '../../services/services.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username;
  password;

  constructor(private router: Router , private service: ServicesService) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    console.log(this.username,this.password);
    // this.router.navigate(['./home']);
    const user ={
      user_name : this.username,
      password : this.password,
    }
    this.service.authUser(user).subscribe(data => {
      console.log(data);
    })
  }
} 
