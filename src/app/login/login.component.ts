import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public error: any;
  public alert: boolean;
  constructor(private loginService: LoginService) {}

  ngOnInit() {}


  onSubmit(){

    const myObserver = {
        next: x => console.log('Observer got a next value: ' + x),
        error: err => {
              this.error = err.error.errorMessage;
              this.alert = true;
              this.password = "";
             },
        complete: () => console.log('Observer got a complete notification'),
    };

    let user = { username: this.username, password: this.password };

    this.loginService.iniciar_sesion(user).subscribe(myObserver);

  }

}
