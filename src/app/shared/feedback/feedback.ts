import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FeedbackData{

  name:string;
  company:string;
 rating:number;
  message:string;

}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})

export class Feedback {

  feedback:FeedbackData={

    name:'',
    company:'',
    rating:5,
    message:''

  };

  feedbackList:FeedbackData[]=[];

  submitFeedback(){

    this.feedbackList.unshift({...this.feedback});

    alert("Feedback Submitted Successfully!");

    this.feedback={

      name:'',
      company:'',
      rating:5,
      message:''

    };

  }

}