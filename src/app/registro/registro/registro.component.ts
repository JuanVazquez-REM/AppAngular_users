import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/inter/interface/interface.component';
import { RegisterService } from 'src/app/services/services/services.component'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user:user;
  registerForm:FormGroup;
  constructor(private fb:FormBuilder, private registerService: RegisterService) {
    this.crForm();
  }

  ngOnInit(): void {
  }

  register(): void {
    this.setuser();
    this.registerService.register(this.user).subscribe((data: any) => {
      console.log('Registro Completo');
      window.alert("Registro Completo");
    }, error => {
      console.log("error al hacer peticion")
      window.alert("Error al registrar");
      console.log(error);
    })
    //console.log(this.registerForm.value)
  }
  crForm(): void {
    this.registerForm = this.fb.group({
      username: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
      edad: ['',[Validators.required]],
      genero: ['',[Validators.required]]
    });
  }
  setuser(): void {
    this.user = {
      username: this.registerForm.get('username').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      edad: this.registerForm.get('edad').value,
      genero: this.registerForm.get('genero').value
    }
  }
}
