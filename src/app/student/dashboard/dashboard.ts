import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpcomingEvents } from '../../shared/upcoming-events/upcoming-events';

interface Student {

  firstName:string;
  lastName:string;
  rollNumber:string;
  cgpa:number;

}

interface Application{

  jobTitle:string;
  companyName:string;
  status:string;

}

@Component({

  selector:'app-dashboard',

  standalone:true,

  imports:[
    CommonModule,
    RouterModule,
    UpcomingEvents
  ],

  templateUrl:'./dashboard.html',

  styleUrl:'./dashboard.css'

})

export class StudentDashboard{

student:Student={

firstName:'Sifty',

lastName:'Kaur',

rollNumber:'MCA2025001',

cgpa:9.68

};

applications:Application[]=[

{

jobTitle:'Java Developer',

companyName:'TCS',

status:'Applied'

},

{

jobTitle:'Frontend Developer',

companyName:'Infosys',

status:'Interview'

},

{

jobTitle:'Backend Developer',

companyName:'Accenture',

status:'Selected'

}

];

get activeCount(){

return this.applications.length;

}

get selectedCount(){

return this.applications.filter(

x=>x.status=='Selected'

).length;

}

profileCompleteness=90;

}