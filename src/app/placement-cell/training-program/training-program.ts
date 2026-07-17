import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Training{
  title:string;
  trainer:string;
  date:string;
  duration:string;
  mode:string;
}

@Component({
  selector:'app-training-program',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./training-program.html',
  styleUrl:'./training-program.css'
})

export class TrainingProgram{

  title='';
  trainer='';
  date='';
  duration='';
  mode='Offline';

  trainings:Training[]=[

    {
      title:'Java Full Stack',
      trainer:'Infosys',
      date:'12 Jul 2026',
      duration:'30 Days',
      mode:'Offline'
    },

    {
      title:'Aptitude Training',
      trainer:'TCS',
      date:'18 Jul 2026',
      duration:'15 Days',
      mode:'Online'
    }

  ];

  addTraining(){

    if(
      this.title==''||
      this.trainer==''||
      this.date==''||
      this.duration==''
    ){
      return;
    }

    this.trainings.unshift({

      title:this.title,
      trainer:this.trainer,
      date:this.date,
      duration:this.duration,
      mode:this.mode

    });

    this.title='';
    this.trainer='';
    this.date='';
    this.duration='';
    this.mode='Offline';

  }

  remove(training:Training){

    this.trainings=this.trainings.filter(t=>t!==training);

  }

}