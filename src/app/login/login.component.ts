import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username=""
password=""
errorMessage ="Invalid Credentails"
invalidLogin=false

//Router

  constructor(private router: Router) { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.username==="niewoq" && this.password==="123"){
    this.router.navigate(['welcome',this.username])
    this.invalidLogin=false;
    console.log(this.username);
    }else {    this.invalidLogin=true     }
  }

}
