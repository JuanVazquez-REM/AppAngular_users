import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { Page404Component } from './page404/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro/registro.component';
import { MostrarComponent } from './mostrar/mostrar/mostrar.component';
import { LoginComponent } from './login/login/login.component';
//import { ServicesComponent } from './services/services/services.component';
//import { InterfaceComponent } from './inter/interface/interface.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavbarComponent,
    Page404Component,
    RegistroComponent,
    MostrarComponent,
    LoginComponent,
//    ServicesComponent,
//    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
