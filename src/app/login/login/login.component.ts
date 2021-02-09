import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/services/services.component'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder, private registerService: RegisterService) {
    this.crForm();
  }
  

  ngOnInit(): void {
  }

  register(): void {
    
    this.registerService.login(this.user).subscribe((data: any) => {
      console.log('Login Completo');
      window.alert("logeado Correctamente");
    }, error => {
      console.log("error al hacer peticion")
      window.alert("Error al logearte");
      console.log(error);
    })
    //console.log(this.registerForm.value)
  }

  crForm(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
}
