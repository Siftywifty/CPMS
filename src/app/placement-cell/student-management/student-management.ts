import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student{
  rollNo:string;
  name:string;
  course:string;
  cgpa:number;
  status:string;
}

@Component({
  selector:'app-student-management',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./student-management.html',
  styleUrl:'./student-management.css'
})

export class StudentManagement{

  search='';

  students:Student[]=[

    {
      rollNo:'MCA001',
      name:'Sifty Kaur',
      course:'MCA',
      cgpa:8.9,
      status:'Placed'
    },

    {
      rollNo:'MCA002',
      name:'Rahul Sharma',
      course:'MCA',
      cgpa:8.2,
      status:'Not Placed'
    },

    {
      rollNo:'BCA001',
      name:'Priya Singh',
      course:'BCA',
      cgpa:9.1,
      status:'Placed'
    },

    {
      rollNo:'BCA002',
      name:'Aman Verma',
      course:'BCA',
      cgpa:7.8,
      status:'Not Placed'
    }

  ];

  get filteredStudents(){

    return this.students.filter(s=>

      s.name.toLowerCase().includes(this.search.toLowerCase()) ||

      s.rollNo.toLowerCase().includes(this.search.toLowerCase()) ||

      s.course.toLowerCase().includes(this.search.toLowerCase())

    );

  }

  view(student:Student){

    alert('Viewing Profile of '+student.name);

  }

  remove(student:Student){

    this.students=this.students.filter(x=>x!==student);

  }

}