import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup ;
  constructor(private fb: FormBuilder, private auth:AuthService) {}
  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    })
  }
  login(){
    this.auth.signIN(this.loginForm.value.email, this.loginForm.value.password)
  }
  createAccount(){
    this.auth.signUp(this.loginForm.value.email, this.loginForm.value.password)

  }    
}