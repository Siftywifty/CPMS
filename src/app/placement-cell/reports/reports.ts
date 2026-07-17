import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PlacementReport{
  company:string;
  students:number;
  package:string;
}

@Component({
  selector:'app-reports',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./reports.html',
  styleUrl:'./reports.css'
})

export class Reports{

  totalStudents=320;

  placedStudents=245;

  totalCompanies=28;

  activeDrives=9;

  highestPackage='18 LPA';

  averagePackage='6.5 LPA';

  reports:PlacementReport[]=[

    {
      company:'TCS',
      students:45,
      package:'7 LPA'
    },

    {
      company:'Infosys',
      students:35,
      package:'6 LPA'
    },

    {
      company:'Accenture',
      students:28,
      package:'6.8 LPA'
    },

    {
      company:'Capgemini',
      students:22,
      package:'5.5 LPA'
    }

  ];

  get placementPercentage():number{

    return Math.round(
      (this.placedStudents/this.totalStudents)*100
    );

  }

}