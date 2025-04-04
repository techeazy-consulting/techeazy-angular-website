import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../../../environment/environment';

interface BlogPost {
  slug: string;
  title: string;
  brief: string;
}

interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
}

interface Publication {
  posts: {
    edges: { node: BlogPost }[];
    pageInfo: PageInfo;
  };
}

interface ApiResponse {
  data: {
    user: {
      publications: { edges: { node: Publication }[] };
    };
  };
}
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  blogs: BlogPost[] = [];
  loading: boolean = true;
  error: string | null = null;
  cursor: string | null = null;
  hasNextPage: boolean = true;
  searchTerm: string = '';
  showPostBlog: boolean = false;

  private API_URL = env.hashNode_API;
  private USERNAME = env.hashnode_username;
  private HASHNODE_API_KEY = env.hashNode_API_KEY;
  private POSTS_PER_PAGE = 9;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchBlogs();
  }

  async fetchBlogs(after: string | null = null) {
    this.loading = true;

    try {
      const response = await this.http.post<ApiResponse>(
        this.API_URL,
        {
          query: `
            query GetUserPublications($username: String!, $after: String) {
              user(username: $username) {
                publications(first: 5) {
                  edges {
                    node {
                      posts(first: ${this.POSTS_PER_PAGE}, after: $after) {
                        edges {
                          node { slug title brief }
                        }
                        pageInfo {
                          endCursor
                          hasNextPage
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: { username: this.USERNAME, after },
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.HASHNODE_API_KEY}`,
          }),
        }
      ).toPromise();

      if (response && response.data && response.data.user && response.data.user.publications && response.data.user.publications.edges[0]?.node) {
        const publication = response.data.user.publications.edges[0].node;
        const fetchedBlogs = publication.posts.edges.map((post) => post.node) || [];
        const newCursor = publication.posts.pageInfo.endCursor || null;
        const hasMorePages = publication.posts.pageInfo.hasNextPage || false;

        this.blogs = [...this.blogs, ...fetchedBlogs.filter(b => !this.blogs.some(existing => existing.slug === b.slug))];
        this.cursor = newCursor;
        this.hasNextPage = hasMorePages;

        console.log('Fetched Blogs:', fetchedBlogs);
        console.log('New Cursor:', newCursor);
        console.log('Has More Pages:', hasMorePages);
      } else {
        this.error = 'Error fetching blogs';
      }
    } catch (err: any) {
      this.error = 'Error fetching blogs';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

  get filteredBlogs() {
    return this.blogs.filter(blog =>
      blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      blog.brief.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
