import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  firstName: string;
  lastName: string;
  rollNumber: string;
  departmentName: string;
  batch: number;
  cgpa: number;
  placementStatus: string;
}

@Component({
  selector: 'app-candidate-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-search.html',
  styleUrl: './candidate-search.css'
})
export class CandidateSearch {

  isLoading = false;

  searchTerm = '';

  minCgpa: number | null = null;

  students: Student[] = [

    {
      firstName: 'Rahul',
      lastName: 'Sharma',
      rollNumber: 'MCA001',
      departmentName: 'Computer Applications',
      batch: 2026,
      cgpa: 8.7,
      placementStatus: 'Placed'
    },

    {
      firstName: 'Priya',
      lastName: 'Singh',
      rollNumber: 'MCA002',
      departmentName: 'Computer Applications',
      batch: 2026,
      cgpa: 9.2,
      placementStatus: 'Not Placed'
    },

    {
      firstName: 'Aman',
      lastName: 'Verma',
      rollNumber: 'MCA003',
      departmentName: 'Computer Science',
      batch: 2026,
      cgpa: 7.9,
      placementStatus: 'Placed'
    },

    {
      firstName: 'Sneha',
      lastName: 'Gupta',
      rollNumber: 'MCA004',
      departmentName: 'Information Technology',
      batch: 2026,
      cgpa: 8.4,
      placementStatus: 'Not Placed'
    }

  ];

  filtered: Student[] = [...this.students];

  applyFilters() {

    this.filtered = this.students.filter(student => {

      const search = this.searchTerm.toLowerCase();

      const matchesSearch =

        student.firstName.toLowerCase().includes(search) ||

        student.lastName.toLowerCase().includes(search) ||

        student.rollNumber.toLowerCase().includes(search);

      const matchesCgpa =

        this.minCgpa == null ||

        student.cgpa >= this.minCgpa;

      return matchesSearch && matchesCgpa;

    });

  }

}