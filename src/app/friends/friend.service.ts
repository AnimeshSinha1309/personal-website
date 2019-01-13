import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Friend } from './friend.model'

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private firestore: AngularFirestore) { }

  getFriends() {
    return this.firestore.collection('friends').snapshotChanges();
  }
}
 