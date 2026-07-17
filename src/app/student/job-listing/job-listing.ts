import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-listing.html',
  styleUrl: './job-listing.css'
})
export class JobListing {

  jobs = [
    {
      company: 'TCS',
      role: 'Java Full Stack Developer',
      location: 'Noida',
      package: '7 LPA',
      deadline: '15 July 2026'
    },
    {
      company: 'Infosys',
      role: 'Software Engineer',
      location: 'Pune',
      package: '6.5 LPA',
      deadline: '20 July 2026'
    },
    {
      company: 'Accenture',
      role: 'Backend Developer',
      location: 'Bangalore',
      package: '8 LPA',
      deadline: '25 July 2026'
    }
  ];

}