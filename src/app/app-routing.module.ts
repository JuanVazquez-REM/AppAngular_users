import { NgModule } from '@angular/core';
//import { FormularioComponent } from './formulario/formulario/formulario.component';
import { RegistroComponent } from './registro/registro/registro.component'
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { Page404Component } from './page404/page404/page404.component';
import { MostrarComponent } from './mostrar/mostrar/mostrar.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: '',component:NavbarComponent},
  {path: 'formulario', component:RegistroComponent},
  {path: 'login', component:LoginComponent},
  {path: 'show', component:MostrarComponent},
  {path: '**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
