import { Component, Input } from '@angular/core';

interface BlogPost {
  slug: string;
  title: string;
  brief: string;
}

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  @Input() blogs: BlogPost[] = [];
}
