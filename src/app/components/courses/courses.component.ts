import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { VideoPopupComponent } from '../video-popup/video-popup.component';
import { ExpressInterestComponent } from '../express-interest/express-interest.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  id: number | null = null;
  classDetails: any;
  chapters: any;
  classes : any;

  showSliderMenu: boolean = true;

  isPopupVisible: boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') || 0);
      if (this.id) {
        this.authService.data$.subscribe((data) => {
          if (data) {
            this.classDetails = data.find((cls: any) => cls.id === this.id);
            console.log("Class Details:", this.classDetails);
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
