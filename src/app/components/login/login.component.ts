import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= "";
  password= "";
  errorMsg= "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if (this.username == "admin" && this.password == "admin"){
      this.errorMsg = "";
      this.router.navigate(['/home']);
    }else{
      this.errorMsg = "Username or password is not correct";
    }
  }


}
