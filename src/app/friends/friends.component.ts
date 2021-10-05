import { Component, OnInit, NgModule } from '@angular/core';
import { Friend } from './friend.model'
import { FriendService } from './friend.service'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friends: Friend[];

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.friendService.getFriends().subscribe(data => {
      this.friends = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Friend;
      }).sort((a: Friend, b: Friend) => (b.degval - a.degval))
    });
  }
}
