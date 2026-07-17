import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applications.html',
  styleUrl: './applications.css'
})
export class Applications {

  applications = [
    {
      company: 'TCS',
      role: 'Java Full Stack Developer',
      status: 'Applied',
      date: '02 July 2026'
    },
    {
      company: 'Infosys',
      role: 'Software Engineer',
      status: 'Interview Scheduled',
      date: '28 June 2026'
    },
    {
      company: 'Accenture',
      role: 'Backend Developer',
      status: 'Selected',
      date: '20 June 2026'
    }
  ];

}