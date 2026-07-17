import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-posting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-posting.html',
  styleUrl: './job-posting.css'
})
export class JobPosting {

  isSubmitting = false;
  errorMessage = '';

  departments = [
    { id: 1, name: 'Computer Applications' },
    { id: 2, name: 'Computer Science' },
    { id: 3, name: 'Information Technology' },
    { id: 4, name: 'Electronics & Communication' }
  ];

  job = {
    jobTitle: '',
    jobType: 'Full-Time',
    location: '',
    jobDescription: '',
    packageLPA: 6,
    minCgpa: 6.5,
    maxBacklogsAllowed: 0,
    applicationDeadline: '',
    driveDate: '',
    eligibleDepartmentIds: [] as number[]
  };

  toggleDepartment(id: number) {

    if (this.job.eligibleDepartmentIds.includes(id)) {

      this.job.eligibleDepartmentIds =
        this.job.eligibleDepartmentIds.filter(x => x !== id);

    } else {

      this.job.eligibleDepartmentIds.push(id);

    }

  }

  isSelected(id: number) {

    return this.job.eligibleDepartmentIds.includes(id);

  }

  onSubmit() {

    this.isSubmitting = true;

    setTimeout(() => {

      this.isSubmitting = false;

      alert('Job Posted Successfully!');

    },1000);

  }

}