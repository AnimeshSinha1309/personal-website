import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friends: Friend[] = require('./friends.json');

  constructor() { }

  ngOnInit() {
  }

}

class Friend {
  name: string;
  website: string;
  username: string;
  text: string;
  image: string;
  school: string;
}