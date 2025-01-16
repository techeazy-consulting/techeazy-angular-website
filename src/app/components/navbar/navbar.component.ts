import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CoursesComponent } from '../courses/courses.component';
import { VideoPopupComponent } from '../video-popup/video-popup.component';

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

  // @ViewChild(CoursesComponent) formPopup!: CoursesComponent

  // openFormPopup(){
  //   this.formPopup.openPopup();
  // }

  // Adding annotation to communicate with the Child component
  @ViewChild(VideoPopupComponent) previewPopup!: VideoPopupComponent;
  
  openVideoPopup(videoId: string) {
    this.previewPopup.openPopup(videoId);
  }
  
}