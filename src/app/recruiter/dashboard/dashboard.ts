import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Job {
  jobTitle: string;
  jobType: string;
  minCgpa: number;
  status: string;
}

interface Application {
  studentName: string;
  jobTitle: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class RecruiterDashboard {

  isLoading = false;

  jobs: Job[] = [

    {
      jobTitle: 'Java Full Stack Developer',
      jobType: 'Full Time',
      minCgpa: 7.0,
      status: 'Open'
    },

    {
      jobTitle: 'Frontend Developer',
      jobType: 'Internship',
      minCgpa: 6.5,
      status: 'Open'
    },

    {
      jobTitle: 'Backend Developer',
      jobType: 'Full Time',
      minCgpa: 7.5,
      status: 'Closed'
    }

  ];

  recentApplications: Application[] = [

    {
      studentName: 'Rahul Sharma',
      jobTitle: 'Java Full Stack Developer',
      status: 'Applied'
    },

    {
      studentName: 'Priya Singh',
      jobTitle: 'Frontend Developer',
      status: 'Shortlisted'
    },

    {
      studentName: 'Aman Verma',
      jobTitle: 'Backend Developer',
      status: 'InterviewScheduled'
    },

    {
      studentName: 'Sneha Gupta',
      jobTitle: 'Java Full Stack Developer',
      status: 'Selected'
    }

  ];

  get openJobsCount(): number {
    return this.jobs.filter(job => job.status === 'Open').length;
  }

  get totalApplicants(): number {
    return this.recentApplications.length;
  }

  get shortlistedCount(): number {
    return this.recentApplications.filter(
      app => app.status === 'Shortlisted' || app.status === 'InterviewScheduled'
    ).length;
  }

  get selectedCount(): number {
    return this.recentApplications.filter(
      app => app.status === 'Selected'
    ).length;
  }

}