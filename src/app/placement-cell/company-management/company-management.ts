import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Company{
  name:string;
  industry:string;
  city:string;
  status:string;
}

@Component({
  selector:'app-company-management',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./company-management.html',
  styleUrl:'./company-management.css'
})

export class CompanyManagement{

  search='';

  companies:Company[]=[

    {
      name:'TCS',
      industry:'Information Technology',
      city:'Noida',
      status:'Approved'
    },

    {
      name:'Infosys',
      industry:'Software',
      city:'Bangalore',
      status:'Pending'
    },

    {
      name:'Accenture',
      industry:'Consulting',
      city:'Hyderabad',
      status:'Approved'
    },

    {
      name:'Wipro',
      industry:'Technology',
      city:'Pune',
      status:'Rejected'
    }

  ];

  get filteredCompanies(){

    return this.companies.filter(c=>

      c.name.toLowerCase().includes(this.search.toLowerCase()) ||

      c.industry.toLowerCase().includes(this.search.toLowerCase()) ||

      c.city.toLowerCase().includes(this.search.toLowerCase())

    );

  }

  approve(company:Company){
    company.status='Approved';
  }

  reject(company:Company){
    company.status='Rejected';
  }

}