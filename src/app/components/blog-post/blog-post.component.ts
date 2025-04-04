import { Component } from '@angular/core';
import { env } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  title: string = '';
  subtitle: string = '';
  contentMarkdown: string = '';
  error: string | null = null;
  success: string | null = null;

  private API_URL = env.hashNode_API;
  private HASHNODE_API_KEY = env.hashNode_API_KEY;
  private PUBLICATION_ID = env.PUBLICATION_ID;

  constructor(private http: HttpClient) {}

  async handlePostBlog(event: Event) {
    event.preventDefault();
    if (this.title.length < 6) {
      this.error = 'Title must be at least 6 characters long.';
      return;
    }

    try {
      const response = await this.http.post(
        this.API_URL,
        {
          query: `
            mutation PublishPost($input: PublishPostInput!) {
              publishPost(input: $input) {
                post {
                  id
                  title
                  url
                  publication {
                    id
                    title
                  }
                  coverImage {
                    url
                  }
                  readTimeInMinutes
                  publishedAt
                  reactionCount
                  responseCount
                  brief
                }
              }
            }
          `,
          variables: {
            input: {
              title: this.title,
              subtitle: this.subtitle,
              publicationId: this.PUBLICATION_ID,
              contentMarkdown: this.contentMarkdown,
              disableComments: false,
            },
          },
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.HASHNODE_API_KEY}`,
          }),
        }
      ).toPromise();

      if (response) {
        this.success = 'Blog posted successfully!';
        this.title = '';
        this.subtitle = '';
        this.contentMarkdown = '';
      }
    } catch (err: any) {
      if (err.error) {
        console.error('API Error:', err.error);
        this.error = err.error.errors?.[0]?.message || 'Error posting blog';
      } else {
        console.error('Unknown Error:', err);
        this.error = 'An unexpected error occurred.';
      }
    }
  }
}
