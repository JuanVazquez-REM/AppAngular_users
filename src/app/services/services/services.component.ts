import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { read } from 'fs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { user } from '../../inter/interface/interface.component';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  apiURL = environment.apiURL;
  constructor(private http:HttpClient) { }

  register(user:user):Observable<any>{
    return this.http.post<user>(`${this.apiURL}registro`, user)
  }

  login(user:user):Observable<any>{
    return this.http.post<user>(`${this.apiURL}login`, user)
  }

  show():Observable<any>{
    return this.http.get<user>(`${this.apiURL}users`);
  }
}