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
  classes: any[] = [];

  constructor(private auth: AuthService, private router: Router) {}
  // constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    // this.fetchClasses();
    this.auth.getAllClassDetails();

    this.auth.data$.subscribe(
      (data) => {
        this.classes = data;
        console.log("Classes from data Service", this.classes);
        
      }
    )
  }

  goToCourses(classItem: any): void {
    const formattedClassName = classItem.className.replace(/ /g, '-');
    this.router.navigate(['/class-detail', formattedClassName]);
  }

  // goToCourses(classItem: any): void{
  //   this.router.navigate(['/class-detail', classItem.className])
  // }

  // Adding annotation to communicate with the Child component
  @ViewChild(ExpressInterestComponent) formPopup!: ExpressInterestComponent;
  
  openFormPopup() {
    this.formPopup.openPopup();
  }
  
}