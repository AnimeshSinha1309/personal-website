import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private firestore: AngularFirestore) { }

  getComments() {
    return this.firestore.collection('comments').snapshotChanges();
  }

  pushComment(comment: Object) {
    this.firestore.collection<Object>('comments').add(comment);
  }

}
 