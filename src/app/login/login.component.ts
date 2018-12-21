import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public alert_usuario: boolean;
  public alert_password: boolean;
  public alert: boolean;
  public x: any;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}



  onSubmit(){

    this.alert_usuario = false;
    this.alert_password = false;
    this.alert = false;

    const myObserver = {
        next: x => {
          console.log('Observer got a next value: ' + x);
          this.x = x;
        },
        error: err => {

              if(err.error.errorMessage == "username or email is required"){
                this.alert_usuario = true;
              }else if(err.error.errorMessage == "password is required"){
                this.alert_password = true;
              }else{
                this.alert = true;
                this.password = "";
              }
        },
        complete: () => console.log('Observer got a complete notification'),
    };

    let user = { username: this.username, password: this.password };

    this.loginService.iniciar_sesion(user).subscribe(myObserver);

  }

}
