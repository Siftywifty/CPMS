import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {

  resume = {
    fileName: 'Sifty_Kaur_Resume.pdf',
    uploadedOn: '05 July 2026',
    status: 'Uploaded'
  };

}