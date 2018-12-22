import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ProductoCreateComponent } from './producto-create/producto-create.component';
import { ProductoUpdateComponent } from './producto-update/producto-update.component';
import { ProductoReadComponent } from './producto-read/producto-read.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDeleteComponent } from './producto-delete/producto-delete.component';


const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },

    { path: 'admin',
      component: AdminComponent,
      children: [
        {  path: 'Create', component: ProductoCreateComponent, outlet: 'productos' },
        {  path: 'Update', component: ProductoUpdateComponent, outlet: 'productos' },
        {  path: 'Read', component: ProductoReadComponent, outlet: 'productos' },
        {  path: 'Delete', component: ProductoDeleteComponent, outlet: 'productos' }


      ]

  }




];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ProductoCreateComponent,
    ProductoUpdateComponent,
    ProductoReadComponent,
    ProductosComponent,
    ProductoDeleteComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
