import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { UpcomingEvents } from '../../shared/upcoming-events/upcoming-events';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,
    UpcomingEvents
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class PlacementDashboard implements AfterViewInit {

  totalStudents = 320;
  companies = 28;
  drives = 15;
  placedStudents = 245;

  placements = [

    {
      student:'Sifty Kaur',
      company:'TCS',
      package:'7 LPA'
    },

    {
      student:'Aman Sharma',
      company:'Infosys',
      package:'6 LPA'
    },

    {
      student:'Rahul Kumar',
      company:'Accenture',
      package:'8 LPA'
    },

    {
      student:'Priya Singh',
      company:'Capgemini',
      package:'5.5 LPA'
    },

    {
      student:'Anjali Verma',
      company:'Wipro',
      package:'6.8 LPA'
    }

  ];

  drivesList = [

    {
      company:'TCS Campus Drive',
      date:'15 July 2026'
    },

    {
      company:'Infosys Hiring',
      date:'20 July 2026'
    },

    {
      company:'Capgemini Recruitment',
      date:'25 July 2026'
    }

  ];

  constructor(){}

  ngAfterViewInit(): void {

    this.createLineChart();

    this.createPieChart();

    this.createBarChart();

  }

  createLineChart(){

    new Chart("lineChart",{

      type:'line',

      data:{

        labels:[
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul'
        ],

        datasets:[{

          label:'Placements',

          data:[
            20,
            35,
            42,
            58,
            70,
            90,
            110
          ],

          borderWidth:3,

          tension:.4,

          fill:false

        }]

      },

      options:{
        responsive:true
      }

    });

  }

  createPieChart(){

    new Chart("pieChart",{

      type:'doughnut',

      data:{

        labels:[
          'Placed',
          'Not Placed'
        ],

        datasets:[{

          data:[
            245,
            75
          ]

        }]

      },

      options:{
        responsive:true
      }

    });

  }

  createBarChart(){

    new Chart("placementChart",{

      type:'bar',

      data:{

        labels:[
          'TCS',
          'Infosys',
          'Accenture',
          'Capgemini',
          'Wipro'
        ],

        datasets:[{

          label:'Students Selected',

          data:[
            45,
            35,
            28,
            22,
            18
          ]

        }]

      },

      options:{
        responsive:true
      }

    });

  }

}