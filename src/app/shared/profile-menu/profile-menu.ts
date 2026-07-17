import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-menu.html',
  styleUrl: './profile-menu.css'
})
export class ProfileMenu {

  showMenu = false;

  userName = 'Sifty Kaur';
  role = localStorage.getItem('role') || 'Student';

  constructor(private router: Router){}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}