import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpressInterestComponent } from '../../components/express-interest/express-interest.component';
import { VideoPopupComponent } from '../../components/video-popup/video-popup.component';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-course-details-template',
  templateUrl: './course-details-template.component.html',
  styleUrl: './course-details-template.component.css'
})
export class CourseDetailsTemplateComponent {
    id: number | null = null;
    classDetails: any;
    chapters: any;
    classes: any;
  
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
