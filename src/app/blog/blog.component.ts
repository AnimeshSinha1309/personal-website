
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { marked } from 'marked';

interface BlogPost {
  file: string;
  title: string;
  date: string;
  tags: string[];
  preview: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];
  selectedPost: BlogPost | null = null;
  postContent: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<BlogPost[]>('assets/blog/index.json').subscribe({
      next: (data) => {
        this.posts = data;
        // Auto-select the most recent post
        if (this.posts.length > 0) {
          this.selectPost(this.posts[0]);
        }
      },
      error: (err) => console.error('Failed to load blog index', err)
    });
  }

  selectPost(post: BlogPost): void {
    this.selectedPost = post;
    this.http.get(`assets/blog/${post.file}`, { responseType: 'text' }).subscribe({
      next: (content) => {
        // Remove frontmatter before rendering
        const contentBody = content.replace(/<!--[\s\S]*?-->/, '');
        Promise.resolve(marked.parse(contentBody)).then(html => {
          this.postContent = html;
        });
      },
      error: (err) => console.error('Failed to load post content', err)
    });
  }

  backToUuidList(): void {
    this.selectedPost = null;
    this.postContent = '';
  }
}
