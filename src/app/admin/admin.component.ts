import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public usuario: any;

  constructor(private router: Router) { }

  ngOnInit() {

     if(localStorage.getItem('isLoggedin') == null){
       this.router.navigate(['login']);
     }else{
       this.usuario = JSON.parse(localStorage.getItem('isLoggedin'));
       console.log(this.usuario);
     }
  }

  cerrarSession(){
    localStorage.setItem('isLoggedin', null);
    this.router.navigate(['login']);
  }



}
