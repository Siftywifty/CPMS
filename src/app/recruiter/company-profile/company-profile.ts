import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-profile.html',
  styleUrl: './company-profile.css'
})
export class CompanyProfile {

  isSaved = false;

  company = {

    companyName: 'TCS',

    industry: 'Information Technology',

    city: 'Noida',

    website: 'https://www.tcs.com',

    description:
      'Tata Consultancy Services is a leading global IT services, consulting, and business solutions organization.',

    isVerified: true

  };

  onSave() {

    this.isSaved = true;

    setTimeout(() => {

      this.isSaved = false;

    }, 2500);

  }

}