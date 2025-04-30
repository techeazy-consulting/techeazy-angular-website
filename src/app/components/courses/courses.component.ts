import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { VideoPopupComponent } from '../video-popup/video-popup.component';
import { ExpressInterestComponent } from '../express-interest/express-interest.component';
import { env } from '../../../environment/environment';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  id: number | null = null;
  className: string = '';
  classDetails: any;
  chapters: any;
  classes : any;

  env_url = env;
  
  showSliderMenu: boolean = true;
  isPopupVisible: boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.className = params.get('className') || '';

      this.className = decodeURIComponent(this.className);
      this.className = this.className.replace(/-/g, ' ');

      if (this.className) {
        this.authService.data$.subscribe((data) => {
          if (data) {
            this.classDetails = data.find((cls: any) => cls.className === this.className);
            console.log("Class Details:", this.classDetails);

            // Remove underscores and format the courseStatus
            if (this.classDetails && this.classDetails.courseStatus) {
              this.classDetails.courseStatus = this.classDetails.courseStatus.replace(/_/g, ' ')
                .replace(/\b\w/g, (char: string) => char.toUpperCase());
            }
          }
        });
      }
    });

    this.authService.data$.subscribe(
      (data) => {
        this.classes = data;
      }
    )

    this.checkScrollPosition();
    
  }

  goToCourses(classItem: any): void {
    const formattedClassName = classItem.className.replace(/ /g, '-');
    this.router.navigate(['/class-detail', formattedClassName]);
  }

  goToFeaturePage() {
    const currentRoute = this.router.url;
  
    this.router.navigate(['/all-features/fullstack'], {
      state: { returnUrl: currentRoute }
    });
  }
  
  // goToCourses(classItem: any): void {
  //   const className = (classItem?.className || '').toString();
  //   const formattedClassName = className.replace(/ /g, '-').toLowerCase();
  //   this.router.navigate(['/class-detail', formattedClassName]);
  // }   
  
  convertLocalDateToReadableFormat(dateStr: string): string {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
  }
  
  onSubjectClick(subject: any) {
    console.log('Selected Subject:', subject);
    this.chapters = subject.chapterList; 
  }

  // Logic for the slider menu
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  private checkScrollPosition(): void {
    this.showSliderMenu = window.scrollY > 0;
  }

  // Adding annotation to communicate with the Child component
  @ViewChild(VideoPopupComponent) previewPopup!: VideoPopupComponent;

  openVideoPopup(videoId: string) {
    this.previewPopup.openPopup(videoId);
  }

  @ViewChild(ExpressInterestComponent) formPopup!: ExpressInterestComponent;

  openFormPopup() {
    this.formPopup.openPopup();
  }

}
