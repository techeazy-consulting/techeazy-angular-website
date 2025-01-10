import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  classList: any[] = [];

  constructor(private auth: AuthService, private router: Router) {}
  // constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchClasses();
  }

  fetchClasses(): void {
    this.auth.getClasses().subscribe(
      (data) => {
        this.classList = data;
      },
      (error) => {
        console.error('Error fetching classes:', error);
      }
    );
  }

  goToCourses(classItem: any): void{
    this.router.navigate(['/class-detail', classItem.id])
  }
}
