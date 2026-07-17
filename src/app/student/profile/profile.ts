import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  student = {
    firstName: 'Sifty',
    lastName: 'Kaur',
    email: 'sifty@example.com',
    phone: '+91 9876543210',
    rollNumber: 'MCA2025001',
    course: 'Master of Computer Applications',
    department: 'Computer Science',
    cgpa: 8.9,
    address: 'Delhi, India',
    skills: [
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'Angular',
      'MySQL'
    ]
  };

}