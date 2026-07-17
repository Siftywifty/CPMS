import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Ticket{

  name:string;
  subject:string;
  category:string;
  message:string;
  status:string;

}

@Component({
  selector:'app-help-support',
  standalone:true,
  imports:[
    CommonModule,
    FormsModule
  ],
  templateUrl:'./help-support.html',
  styleUrl:'./help-support.css'
})

export class HelpSupport{

ticket:Ticket={

name:'',
subject:'',
category:'Technical',
message:'',
status:'Pending'

};

tickets:Ticket[]=[];

submitTicket(){

this.tickets.unshift({...this.ticket});

alert("Support Ticket Submitted Successfully!");

this.ticket={

name:'',
subject:'',
category:'Technical',
message:'',
status:'Pending'

};

}

}