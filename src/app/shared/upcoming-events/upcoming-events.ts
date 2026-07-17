import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event{

  title:string;

  date:string;

  type:string;

}

@Component({
  selector:'app-upcoming-events',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./upcoming-events.html',
  styleUrl:'./upcoming-events.css'
})
export class UpcomingEvents{

  events:Event[]=[

    {
      title:'TCS Campus Drive',
      date:'15 July 2026',
      type:'Drive'
    },

    {
      title:'Resume Workshop',
      date:'18 July 2026',
      type:'Training'
    },

    {
      title:'Infosys Hiring Test',
      date:'20 July 2026',
      type:'Assessment'
    },

    {
      title:'Accenture Interview',
      date:'22 July 2026',
      type:'Interview'
    },

    {
      title:'Java Full Stack Training',
      date:'25 July 2026',
      type:'Training'
    }

  ];

}