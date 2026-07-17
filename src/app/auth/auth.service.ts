import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string, role: string): boolean {

    if(email && password){
      localStorage.setItem('role', role);
      return true;
    }

    return false;
  }

  logout(){

    localStorage.removeItem('role');

  }

  getRole(){

    return localStorage.getItem('role');

  }

  isLoggedIn(){

    return localStorage.getItem('role') != null;

  }

}