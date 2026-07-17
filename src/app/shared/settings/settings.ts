import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({

selector:'app-settings',

standalone:true,

imports:[
CommonModule,
FormsModule
],

templateUrl:'./settings.html',

styleUrl:'./settings.css'

})

export class Settings{

user={

name:'Sifty Kaur',

email:'sifty@example.com',

phone:'9876543210'

};

darkMode=false;

emailNotification=true;

smsNotification=false;

save(){

alert('Settings Saved Successfully');

}

}

