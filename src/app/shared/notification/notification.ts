import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {

  title: string;

  message: string;

  time: string;

  icon: string;

}

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent {

  showNotifications = false;

  notifications: Notification[] = [

    {
      icon:'🏢',
      title:'New Company',
      message:'TCS Campus Drive has been added.',
      time:'5 mins ago'
    },

    {
      icon:'📢',
      title:'Announcement',
      message:'Resume submission deadline is tomorrow.',
      time:'30 mins ago'
    },

    {
      icon:'🎓',
      title:'Training',
      message:'Java Full Stack Training starts Monday.',
      time:'1 hour ago'
    },

    {
      icon:'📅',
      title:'Interview',
      message:'Interview scheduled with Infosys.',
      time:'Today'
    }

  ];

  toggleNotifications(){

    this.showNotifications = !this.showNotifications;

  }

}