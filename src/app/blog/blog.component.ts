import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://animeshsinha1309.github.io/notes-blog/');
  }
}
