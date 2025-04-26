import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ExpressInterestComponent } from '../express-interest/express-interest.component';
import { env } from '../../../environment/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  // classList: any[] = [];
  classes: any[] = [];
  courseClasses: any[] = [];
  internshipClasses: any[] = [];

  env_url = env;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.getAllClassDetails();

    this.auth.data$.subscribe(
      (data) => {
        this.classes = data;
        
        this.courseClasses = this.classes.filter(item => item.typeOfCourse === 'INSTRUCTOR_LED_COURSE');
        this.internshipClasses = this.classes.filter(item => item.typeOfCourse === 'INTERNSHIP');
      }
    )
  }

  goToCourses(classItem: any): void {
    const formattedClassName = classItem.className.replace(/ /g, '-');
    this.router.navigate(['/class-detail', formattedClassName]);
  }

  goToInternship(classItem: any): void {
    const formattedClassName = classItem.className.replace(/ /g, '-');
    this.router.navigate(['/class-detail', formattedClassName]);
  }

  @ViewChild(ExpressInterestComponent) formPopup!: ExpressInterestComponent;
  
  openFormPopup() {
    this.formPopup.openPopup();
  }
  
}