import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NotificationComponent } from '../shared/notification/notification';
import { ProfileMenu } from '../shared/profile-menu/profile-menu';


@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    NotificationComponent,
    ProfileMenu
  ],
  templateUrl: './app-shell.html',
  styleUrls: ['./app-shell.css']
})
export class AppShell {

  role: string = localStorage.getItem('role') || 'Student';

  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}