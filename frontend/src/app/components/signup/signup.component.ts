import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServicesService} from '../../services/services.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private router: Router, private service: ServicesService ) { }

  username;
  name;
  email;
  phone;
  address;
  dob;
  farmer_type;
  account_info_id;
  card_info_id;
  password;

  ngOnInit() {
  }

  redirect(){
    this.router.navigate(['./home']);
  }

  onSignupSubmit(){
    const newUser = {
      user_name :this.username,
      name:this.name,
      email:this.email,
      phone:this.phone,
      address:this.address,
      date_of_birth:this.dob,
      farmer_type:this.farmer_type,
      account_info_id:this.account_info_id,
      card_info_id:this.card_info_id,
      password: this.password
    }
    console.log(newUser);
    this.service.registerFarmer(newUser).subscribe(data => {
      console.log(data);
    })
  }

  
}
