import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  confirmPass = "";
  hide = true;
  user = {
    firstname:"",
    lastname:"",
    password:"",
    username:"",
    email: "",
    role:"",
    iban:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  registerClicked(){
    console.log(this.user);
  }

}
