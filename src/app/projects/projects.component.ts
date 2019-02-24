import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CommentsService } from './comments.service';
import { FriendService } from '../friends/friend.service';
import { Comment } from './comment.model';
import { Friend } from '../friends/friend.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  formWhere: string;
  formEmail: string;
  formMessage: string;
  formName: string;
  favoriteColorControl = new FormControl('');
  comments: any;

  constructor(public commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService.getComments().subscribe(data => {
      this.comments = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Comment;
      })
    });
  }

  onSubmit(form: NgForm) {
    let comment: Comment = new Comment(this.formMessage, this.formEmail, this.formWhere);
    this.commentsService.pushComment({
      "name": this.formName,
      "email": this.formEmail,
      "fromWhere": this.formWhere,
      "message": this.formMessage
    });
    console.log(comment);
  }

}