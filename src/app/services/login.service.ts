import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string = "http://localhost:8080/v1/login";

  constructor(private http: HttpClient) { }

  iniciar_sesion(user: any){

    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(params);
    //return this.http.post(this.url, params, {headers});

  }

}
