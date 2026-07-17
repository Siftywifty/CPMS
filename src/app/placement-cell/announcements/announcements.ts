import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Announcement{

title:string;

description:string;

priority:string;

date:string;

}

@Component({

selector:'app-announcements',

standalone:true,

imports:[CommonModule,FormsModule],

templateUrl:'./announcements.html',

styleUrl:'./announcements.css'

})

export class Announcements{

title='';

description='';

priority='Medium';

announcements:Announcement[]=[

{

title:'Resume Submission',

description:'Submit your resume before Friday.',

priority:'High',

date:'05 Jul 2026'

},

{

title:'Java Training',

description:'Training starts Monday at 10 AM.',

priority:'Medium',

date:'06 Jul 2026'

}

];

addAnnouncement(){

if(this.title.trim()=='' || this.description.trim()=='')

return;

this.announcements.unshift({

title:this.title,

description:this.description,

priority:this.priority,

date:new Date().toLocaleDateString()

});

this.title='';

this.description='';

this.priority='Medium';

}

deleteAnnouncement(index:number){

this.announcements.splice(index,1);

}

}