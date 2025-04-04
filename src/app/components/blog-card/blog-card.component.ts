import { Component, Input } from '@angular/core';

interface BlogPost {
  slug: string;
  title: string;
  brief: string;
}

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  @Input() data: BlogPost | undefined;
}
