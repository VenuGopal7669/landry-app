import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landry-user',
  templateUrl: './landry-user.component.html',
  styleUrls: ['./landry-user.component.css']
})
export class LandryUserComponent implements OnInit {
  userId:number = 10;
  userName1: string = 'ofline';
  allowNewUser = false;
  userCreatedStatus = 'No User is Created'
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    },5000);
   }
   changeUserCreatedStatus() {
     this.userCreatedStatus = 'user is created';
   }
   onUpdateUser(event: Event) {
     this.userName = (event.target as HTMLInputElement).value
   }

  ngOnInit(): void {
  }

}
