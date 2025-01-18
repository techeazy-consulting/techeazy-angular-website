import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ExpressInterestComponent } from '../express-interest/express-interest.component';

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

  // Adding annotation to communicate with the Child component
  @ViewChild(ExpressInterestComponent) formPopup!: ExpressInterestComponent;
  
  openFormPopup() {
    this.formPopup.openPopup();
  }
  
}