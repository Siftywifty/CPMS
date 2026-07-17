import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Interview {

  scheduleId: number;

  roundName: string;

  scheduledAt: string;

  mode: string;

  venue?: string;

  meetingLink?: string;

  status: string;

  result?: string;

  feedback?: string;

}
@Component({
  selector: 'app-interview-scheduling',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './interview-schedule.html',
  styleUrl: './interview-schedule.css'
})
export class InterviewSchedule {

  isLoading = false;

  interviews: Interview[] = [

    {
      scheduleId: 1,
      roundName: 'Technical Round',
      scheduledAt: '2026-07-08T10:00:00',
      mode: 'Offline',
      venue: 'Placement Cell Lab',
      status: 'Scheduled'
    },

    {
      scheduleId: 2,
      roundName: 'HR Round',
      scheduledAt: '2026-07-09T02:30:00',
      mode: 'Online',
      meetingLink: 'https://meet.google.com/demo',
      status: 'Completed',
      result: 'Pass',
      feedback: 'Excellent communication and confidence.'
    }

  ];

  feedbackDraft: Record<number, { result: string; feedback: string }> = {

    1: {
      result: '',
      feedback: ''
    },

    2: {
      result: '',
      feedback: ''
    }

  };

  submitFeedback(interview: Interview) {

    const draft = this.feedbackDraft[interview.scheduleId];

    interview.result = draft.result;

    interview.feedback = draft.feedback;

    interview.status = 'Completed';

    alert('Interview feedback submitted successfully.');

  }

}